from django.urls import path
from .views import *

urlpatterns = [
    path('', OrderView.as_view()),
    path('pay/', PaymentView.as_view()),
    path('verify-payment/', PaymentConfirmationView.as_view()),
]
