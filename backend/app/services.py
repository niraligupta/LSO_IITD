from django.core.mail import send_mail
from django.conf import settings

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
