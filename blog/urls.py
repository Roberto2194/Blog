from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("news", views.news, name="news"),
    path("categories", views.categories, name="categories"),
    path("subscribe", views.subscribe, name="subscribe"),
    path("newsletter", views.newsletter, name="newsletter")
]