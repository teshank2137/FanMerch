from django.db import models
import uuid

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    currency = models.CharField(max_length=3, default='₹')
    image = models.ImageField(upload_to='products/')
    stock = models.BooleanField(default=True)
