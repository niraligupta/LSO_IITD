from rest_framework import serializers
from .models import Registration
from django.contrib.auth import authenticate

class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = "__all__"
        read_only_fields = ["created_at"]

    def validate(self, data):
        if not data.get("agree_terms"):
            raise serializers.ValidationError("You must accept terms and conditions.")
        return data



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")

        user = authenticate(username=email, password=password)

        if not user:
            raise serializers.ValidationError("Invalid email or password")

        if not user.is_active:
            raise serializers.ValidationError("Account is disabled")

        data["user"] = user
        return data