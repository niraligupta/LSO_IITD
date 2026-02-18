from django.db import models
from django.core.validators import RegexValidator

class Registration(models.Model):

    CATEGORY_CHOICES = [
        ('student', 'Student / Post Doctoral'),
        ('faculty', 'Faculty Member'),
        ('government', 'Government Officer'),
        ('industry', 'Industry Professional'),
    ]

    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=100)
    affiliation = models.CharField(max_length=200)
    designation = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    research_area = models.TextField()
    address = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=10)
    dietary_requirements = models.TextField(blank=True, null=True)
    agree_terms = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "registrations"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.full_name} - {self.email}"

