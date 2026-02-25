from rest_framework import serializers
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from django.conf import settings
import random
import string

# def generate_random_password(length=10):
#     characters = string.ascii_letters + string.digits  # a-z A-Z 0-9
#     password = ''.join(random.choice(characters) for _ in range(length))
#     return password


# User = get_user_model()

# class RegisterSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = User
#         fields = ["email"]

#     def create(self, validated_data):
#         email = validated_data["email"]

#         # 🔐 Generate Random Password
#         random_password = generate_random_password()

#         # 👤 Create User
#         user = User.objects.create_user(
#             email=email,
#             password=random_password
#         )

#         # 📧 Send Email with Password
#         send_mail(
#             subject="Your Login Credentials - LSO 2026",
#             message=f"""
# Hello,

# Your registration is successful 🎉

# Your login details:

# Email: {email}
# Password: {random_password}

# Please login and change your password after first login.

# Regards,
# LSO Team
# """,
#             from_email=settings.EMAIL_HOST_USER,
#             recipient_list=[email],
#             fail_silently=False,
#         )

#         return user
    
    
def send_registration_email(registration):
    subject = "LSO 2026 - Registration Completed"
    
    message = f"""
Dear {registration.full_name},

Your registration for LSO 2026 has been successfully completed.

Category: {registration.get_category_display()}
Institution: {registration.affiliation}

We will contact you soon with further details.

Best Regards,
LSO 2026 Team
"""

    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [registration.email],
        fail_silently=False,
    )