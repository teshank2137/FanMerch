from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.serializer import UserDataSerializer, UserSerializer
from .models import UserData


class SignupView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            token = RefreshToken.for_user(serializer.save())
            tokens = {}
            tokens['refresh'] = str(token)
            tokens['access'] = str(token.access_token)
            return Response({'status': 'ok', 'data': serializer.data, 'token': tokens})
        return Response({'status': 'error', 'data': serializer.errors}, status=400)


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serializer = UserDataSerializer(user.userdata)
        userSerializer = UserSerializer(user)
        data = {**serializer.data, ** userSerializer.data}
        return Response({'status': 'ok', 'data': data})

    def patch(self, request):
        user = User.objects.get(pk=request.user.id)
        userdata = UserData.objects.get(user=user)
        serializer = UserDataSerializer(
            userdata, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'ok', 'data': serializer.data})
        return Response({'status': 'error', 'data': serializer.errors}, status=400)
