from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255, null=True) 
    user_image = models.CharField(max_length=255)
    current_city = models.CharField(max_length=255)
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
<<<<<<< HEAD
        return self.full_name
=======
        return self.user.username
>>>>>>> submain

class City(models.Model):
    city_name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    state_province = models.CharField(max_length=255)
    city_image = models.CharField(max_length=255)

    def __str__(self):
        return self.city_name

class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    photo = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

