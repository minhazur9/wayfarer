from django import forms
from .models import *

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['full_name','user_image', 'current_city']

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title' , 'description' , 'photo']

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']



