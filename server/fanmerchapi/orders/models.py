from django.db import models
from django.contrib.auth.models import User
from products.models import Product

# Create your models here.


class ProductQuantity(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return str(self.product.name) + ' - ' + str(self.quantity)


class Orders(models.Model):
    options = ('Pending', 'Processing', 'Shipped',
               'Delivered', 'Cancelled', )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    total = models.IntegerField(default=0)
    status = models.CharField(
        max_length=20, choices=zip(options, options), default='Pending')
    products = models.ManyToManyField(ProductQuantity)
    isPaid = models.BooleanField(default=False)
    razorpay_payment_id = models.CharField(max_length=150, null=True)
    razorpay_order_id = models.CharField(max_length=150, null=True)
    razorpay_signature = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.user.username + '-' + self.status
