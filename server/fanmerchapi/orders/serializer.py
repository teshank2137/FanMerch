from rest_framework import serializers
from .models import Orders, ProductQuantity
from products.models import Product
from products.serializer import ProductSerializer


class ProductQuantitySerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = ProductQuantity
        fields = ('id', 'product', 'quantity')
        extra_kwargs = {
            'id': {'read_only': True},
        }


class OrderSerializer(serializers.ModelSerializer):
    products = ProductQuantitySerializer(many=True, read_only=True)

    class Meta:
        model = Orders
        fields = ('id', 'user', 'total', 'status', 'products', 'isPaid')


class CreateOrderSerializer(serializers.Serializer):
    products = serializers.ListField(
        child=serializers.CharField(max_length=100)
    )

    def create(self, validated_data):
        products = validated_data.pop('products')
        print(products)
        order = Orders.objects.create(**validated_data)
        total = 0
        for product in products:
            [product_id, quantity] = list(map(int, product.split('Q')))
            try:
                prod = Product.objects.get(pk=product_id)

                if prod.stock:
                    total += prod.price * quantity
                    prodQ = ProductQuantity.objects.create(
                        product=prod, quantity=quantity)
                    prodQ.save()
                    order.products.add(prodQ)
            except:
                print('ERROR:: Incorrect Product ID', product_id)
                for prodQ in order.products.all():
                    prodQ.delete()
                order.delete()
                raise Exception(f'Incorrect Product ID {product_id}')

        order.total = total
        order.save()
        return order
