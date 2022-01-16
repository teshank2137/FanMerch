from django.urls import path
from rest_framework_simplejwt import views as jwtViews

from .views import ProfileView, SignupView

urlpatterns = [
    path('token/', jwtViews.TokenObtainPairView.as_view()),
    path('refresh/', jwtViews.TokenRefreshView.as_view()),
    path('signup/', SignupView.as_view()),
    path('profile/', ProfileView.as_view()),
]
