from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "blog/index.html")


def news(request):
    return render(request, "blog/news.html")


def categories(request):
    return render(request, "blog/categories.html")


def subscribe(request):
    return render(request, "blog/subscribe.html")


def newsletter(request):
    return render(request, "blog/newsletter.html")