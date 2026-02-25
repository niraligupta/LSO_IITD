from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction
from .serializers import RegistrationSerializer,LoginSerializer
from .services import send_registration_email
from django.contrib.auth import login
from rest_framework.permissions import AllowAny
import traceback

class RegistrationCreateAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        print("Incoming Data:", request.data)
        serializer = RegistrationSerializer(data=request.data)

        if serializer.is_valid():
            try:
                with transaction.atomic():
                    registration = serializer.save()
                    try:
                        send_registration_email(registration) 
                       
                    except Exception as email_err:
                        print(f"Email failed: {str(email_err)}")
                       
                        traceback.print_exc()
           
                return Response({"message": "Registration successful. Check your email for password." },status=status.HTTP_201_CREATED)

            except Exception as e:
                print(f"Critical error: {str(e)}")
                return Response({"error": "Registration failed."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    

class LoginView(APIView):

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            login(request, user)

            return Response({
                "message": "Login successful",
                "email": user.email,
                "is_admin": user.is_staff
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    