# Generated by Django 5.0 on 2023-12-16 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email')),
                ('name', models.CharField(max_length=30, verbose_name='name')),
                ('account_status', models.CharField(choices=[('seller', 'Seller'), ('admin', 'Admin'), ('buyer', 'Buyer')], max_length=10, verbose_name='accountStatus')),
                ('phone_number', models.CharField(max_length=15, verbose_name='phoneNumber')),
                ('avatar', models.URLField(verbose_name='avatar')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='modified')),
                ('shop_name', models.CharField(default='', max_length=30, verbose_name='sellerShopName')),
                ('address', models.TextField(default='sellerAddress')),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_verified', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Users',
            },
        ),
    ]
