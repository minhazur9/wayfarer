from django.urls import path
from django.contrib import admin
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    #Profile URLs
    path('accounts/signup/', views.signup, name="signup"),
    path('profiles/<int:user_id>/', views.profile_detail, name="profile_detail"),
    path('dashboard/', views.my_profile, name="my_profile"),
    path('dashboard/edit/', views.edit_profile, name="edit_profile"),
    #City URLs
    path('cities/', views.city_index, name="city_index"),
    path('cities/<int:city_id>/', views.city_detail, name='city_detail'),
    #Post URLs
    path('posts/<int:post_id>/', views.post_detail, name='post_detail'),
    path('posts/<int:post_id>/edit', views.edit_post, name='edit_post'),
    path('posts/<int:post_id>/delete', views.delete_post, name='delete_post'),
]