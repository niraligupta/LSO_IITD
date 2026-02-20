from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction
from .serializers import RegistrationSerializer
from .services import send_registration_email
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView
from .models import Registration
import traceback
# class RegistrationCreateAPIView(APIView):
#     permission_classes = [AllowAny]
#     def post(self, request):
#         print("Incoming Data:", request.data)
#         serializer = RegistrationSerializer(data=request.data)

#         if serializer.is_valid():
#             try:
#                 with transaction.atomic():
#                     registration = serializer.save()
#                     send_registration_email(registration)
#                 return Response(
#                     {"message": "Registration successful. Email sent."},
#                     status=status.HTTP_201_CREATED
#                 )
#             except Exception as e:
#                 return Response(
#                     {"error": str(e)},
#                     # {"error": "Something went wrong."},
#                     status=status.HTTP_500_INTERNAL_SERVER_ERROR
#                 )

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
                        email_status = "sent"
                    except Exception as email_err:
                        print(f"Email failed: {str(email_err)}")
                        import traceback
                        traceback.print_exc()
                        email_status = "failed"

                message = (
                    "Registration successful. Confirmation email sent."
                    if email_status == "sent"
                    else "Registration successful. Email could not be sent (check server logs)."
                )

                return Response({"message": message}, status=status.HTTP_201_CREATED)

            except Exception as e:
                print(f"Critical error: {str(e)}")
                return Response({"error": "Registration failed."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class RegistrationCreateAPIView(CreateAPIView):
#     queryset = Registration.objects.all()
#     serializer_class = RegistrationSerializer
#     permission_classes = [AllowAny]

#     def perform_create(self, serializer):
#         with transaction.atomic():
#             serializer.save()