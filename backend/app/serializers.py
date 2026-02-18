from rest_framework import serializers
from .models import Registration

class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = "__all__"
        read_only_fields = ["created_at"]

    def validate(self, data):
        if not data.get("agree_terms"):
            raise serializers.ValidationError("You must accept terms and conditions.")
        return data
