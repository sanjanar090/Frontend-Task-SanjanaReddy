from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Task


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password")

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        # Avoid duplicate profile creation
        Profile.objects.get_or_create(user=user)  
        return user


# ✅ Add nested UserSerializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # instead of StringRelatedField

    class Meta:
        model = Profile
        fields = ("id", "user", "bio")


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ("id", "title", "description", "completed", "created_at", "user")
        read_only_fields = ("user",)
