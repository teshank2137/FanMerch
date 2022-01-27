from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db import models


class UserData(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=150, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    zipcode = models.CharField(max_length=10, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, default='India')

    def __str__(self):
        return self.user.username


# signal to autocreate userdata when user is created
@receiver(post_save, sender=User)
def create_user_data(sender, instance, created, **kwargs):
    if created:
        UserData.objects.create(user=instance)


# save userdata when user is updated
@receiver(post_save, sender=User)
def save_user_data(sender, instance, **kwargs):
    instance.userdata.save()
