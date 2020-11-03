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
            Profile.objects.create(user=user)
            return redirect('home')
    else:
        error_message = 'Invalid sign up = try again'
        form = UserCreationForm()
        context = {'form': form, 'error_message': error_message}
        return render(request, 'registration/signup.html', context)

def profile_detail(request, username):
    profile = Profile.objects.get(user=request.user)
    return render(request, 'profiles/detail.html', {'profile': profile})

def my_profile(request):
    my_profile = User.objects.get(username=request.user.username)
    posts = Post.objects.filter(user=request.user)
    context = {
        'my_profile': my_profile,
        'posts': posts
    }
    return render(request,'profiles/my_profile.html', context)

def edit_profile(request):
    profile = Profile.objects.get(user_id=request.user.id)
    if request.method == 'POST':
        profile_form = ProfileForm(request.POST, instance=profile)
        if profile_form.is_valid():
            updated_profile = profile_form.save()
            return redirect('my_profile')
    else:
        form = ProfileForm(instance=profile)
        context = {'form': form, 'profile': profile}
        return render(request, 'profiles/edit_profile.html', context)


