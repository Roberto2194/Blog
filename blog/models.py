from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    userFollowing = models.ManyToManyField("User", blank=True, related_name="followed_by")
    articlesSaved = models.ManyToManyField("Article", blank=True, related_name="saved_by")


class Article(models.Model):
    author = models.ForeignKey("User", on_delete=models.CASCADE, related_name="articles")
    title = models.TextField(blank=False)
    body = models.TextField(blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    @property
    def saves(self):
        return self.saved_by.count()

    def serialize(self):
        return {
            "id": self.id,
            "author": self.author.username,
            "title": self.title,
            "body": self.body,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            "saves": self.saved_by.count()
        }
    
    def __str__(self):
        return f"{self.author}: \"{self.title}\""
