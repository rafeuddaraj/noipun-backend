# Generated by Django 5.0 on 2023-12-16 07:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Shipping',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80, verbose_name='name')),
                ('phone_number', models.CharField(max_length=11, verbose_name='phoneNumber')),
                ('another_phone_number', models.CharField(max_length=11, verbose_name='another_phone_number')),
                ('city', models.CharField(max_length=100, verbose_name='city')),
                ('area', models.CharField(max_length=100, verbose_name='area')),
                ('zone', models.CharField(max_length=100, verbose_name='zone')),
                ('details_adress', models.TextField(verbose_name='Details_Adress')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created_At')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Last_Modified')),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('order_item', models.AutoField(primary_key=True, serialize=False)),
                ('quantity', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created_At')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Last_Modified')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='productId')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='userId')),
            ],
        ),
        migrations.CreateModel(
            name='Carts',
            fields=[
                ('cart_id', models.AutoField(primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created_At')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Last_Modified')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='userId')),
                ('order_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.orders', verbose_name='orderItem')),
            ],
        ),
        migrations.CreateModel(
            name='All_Orders',
            fields=[
                ('all_orders_id', models.AutoField(primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created_At')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Last_Modified')),
                ('orders', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.orders', verbose_name='orders')),
            ],
        ),
    ]
