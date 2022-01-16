from django.contrib.auth.models import User

from rest_framework import serializers

from .models import UserData


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('phone', 'address',
                  'city', 'state', 'zipcode', 'country')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data, *args, **kwargs):

        user = User.objects.create_user(**validated_data)

        return user
