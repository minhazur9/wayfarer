from django.urls import path
from django.contrib import admin
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('accounts/signup/', views.signup, name="signup"),
    path('profiles/<str:username>/', views.profile_detail, name="profile_detail"),
    path('dashboard/', views.my_profile, name="my_profile"),
    path('dashboard/edit/', views.edit_profile, name="edit_profile")
]