from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, profile_view, TaskViewSet, LoginView

router = DefaultRouter()
router.register("tasks", TaskViewSet, basename="task")

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),   
    path("profile/", profile_view, name="profile"),
    path("", include(router.urls)),
]
