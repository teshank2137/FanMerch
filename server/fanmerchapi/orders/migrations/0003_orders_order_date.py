# Generated by Django 3.1.7 on 2022-01-27 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20220116_1552'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='order_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
