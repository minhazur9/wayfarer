from django import forms
from .models import *

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['full_name','user_image', 'current_city']



