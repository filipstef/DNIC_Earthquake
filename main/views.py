from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, "Home.html", {})

def aboutUs(request):
    return render(request, "AboutUs.html", {})

def learn(request):
    return render(request, "Learn.html", {})