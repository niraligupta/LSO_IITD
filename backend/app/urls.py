from django.urls import path
from .views import RegistrationCreateAPIView,LoginView

urlpatterns = [
    path("register/", RegistrationCreateAPIView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
]
