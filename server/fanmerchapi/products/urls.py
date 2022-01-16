# django urls
from django.urls import path

from .views import *

urlpatterns = [
    path('', Products.as_view(), name='products'),
    path('details/<int:pk>/', ProductDetail.as_view(), name='product_detail'),
]
