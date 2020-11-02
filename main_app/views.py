from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import *
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from .models import *


def home(request):
    return render(request, 'home.html')

def signup(request):
    error_message = ''
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        error_message = 'Invalid sign up = try again'
        form = UserCreationForm()
        context = {'form': form, 'error_message': error_message}
        return render(request, 'registration/signup.html', context)

def profile_detail(request, username):
    profile = User.objects.get(username=username)
    return render(request, 'profiles/detail.html', {'profile': profile})

def my_profile(request):
    my_profile = User.objects.get(username=request.user.username)
    return render(request,'profiles/my_profile.html', {'my_profile' : my_profile})