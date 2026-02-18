from django.urls import path
from .views import RegistrationCreateAPIView

urlpatterns = [
    path("register/", RegistrationCreateAPIView.as_view(), name="register"),
]
