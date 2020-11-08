from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255, null=True) 
    user_image = models.ImageField(upload_to='wayfarer_project/static/user_images', default='wayfarer_project/static/default-user-image-2.png', null=True)
    current_city = models.CharField(max_length=255)
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

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
    photo = models.ImageField(upload_to='wayfarer_project/static/post_images', null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return (f'comment on {self.post.title} by {self.user.username}')

