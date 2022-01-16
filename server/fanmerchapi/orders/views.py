import environ
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import razorpay

from .serializer import CreateOrderSerializer, OrderSerializer
from orders.models import Orders
# Create your views here.

env = environ.Env()


class OrderView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        query = Orders.objects.filter(user=request.user)
        serializer = OrderSerializer(query, many=True)
        return Response({'status': 'ok', 'data': serializer.data})

    def post(self, request):
        serializer = CreateOrderSerializer(data=request.data)
        if serializer.is_valid():
            try:
                order = serializer.save(user=request.user)
            except Exception as e:
                return Response({'status': 'bad request', 'error': str(e)}, status=400)
            return Response({'status': 'ok', 'data': OrderSerializer(order).data})

        return Response({'status': 'bad request'}, status=400)


class PaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        order_id = request.data.get('order_id')
        try:
            order = Orders.objects.get(pk=order_id)
        except Orders.DoesNotExist:
            return Response({'status': 'bad request', 'error': 'Order does not exist'}, status=400)

        if order.isPaid:
            return Response({'status': 'bad request', 'error': 'Order already paid'}, status=400)

        client = razorpay.Client(
            auth=(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET')))

        payment = client.order.create({
            "amount": order.total * 100,
            "currency": "INR",
        })
        order.razorpay_order_id = payment['id']
        order.save()
        return Response({'status': 'ok', 'data': payment})


class PaymentConfirmationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            razorpay_order_id = request.data.get('razorpay_order_id')
            razorpay_payment_id = request.data.get('razorpay_payment_id')
            razorpay_signature = request.data.get('razorpay_signature')
        except:
            return Response({'status': 'bad request', 'error': 'Invalid request'}, status=400)

        try:
            order = Orders.objects.get(razorpay_order_id=razorpay_order_id)
            if request.user != order.user:
                return Response({'status': 'bad request', 'error': 'User not authorized'}, status=400)
        except Orders.DoesNotExist:
            return Response({'status': 'bad request', 'error': 'Order does not exist'}, status=400)

        client = razorpay.Client(
            auth=(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET')))

        data = {
            'razorpay_order_id': razorpay_order_id,
            'razorpay_payment_id': razorpay_payment_id,
            'razorpay_signature': razorpay_signature
        }
        success = client.utility.verify_payment_signature(
            data)  # return None when valid
        if not success:
            return Response({'status': 'bad request', 'error': 'Payment failed'}, status=400)

        if order.isPaid:
            return Response({'status': 'bad request', 'error': 'Order already paid'}, status=400)

        order.isPaid = True
        order.razorpay_order_id = razorpay_order_id
        order.razorpay_payment_id = razorpay_payment_id
        order.razorpay_signature = razorpay_signature
        order.status = 'Processing'
        order.save()
        return Response({'status': 'Payment successfull', 'data': OrderSerializer(order).data})
