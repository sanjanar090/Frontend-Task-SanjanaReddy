from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RegisterView, LoginView, profile_view, TaskViewSet

router = DefaultRouter()
router.register(r"tasks", TaskViewSet, basename="task")

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("profile/", profile_view, name="profile"),
]

urlpatterns += router.urls
