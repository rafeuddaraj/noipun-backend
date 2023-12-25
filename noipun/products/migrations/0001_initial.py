# Generated by Django 5.0 on 2023-12-25 14:31

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(blank=True, max_length=50, null=True, verbose_name='categoryName')),
                ('category_description', models.TextField(blank=True, null=True, verbose_name='categoryDescription')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='lastModified')),
                ('user', models.ManyToManyField(blank=True, related_name='category', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False, verbose_name='productName')),
                ('product_title', models.CharField(blank=True, max_length=100, null=True, verbose_name='productTitle')),
                ('description', models.TextField(blank=True, null=True, verbose_name='productDescription')),
                ('price', models.FloatField(blank=True, default=0, null=True, verbose_name='price')),
                ('ratting', models.FloatField(default=0, verbose_name='ratting')),
                ('is_available', models.BooleanField(blank=True, default=True, null=True, verbose_name='availableStatus')),
                ('total_buyed', models.IntegerField(default=0, verbose_name='totalBuyed')),
                ('delivery_is_free', models.BooleanField(default=False, verbose_name='deliveryStatus')),
                ('weight', models.FloatField(blank=True, default=0, null=True, verbose_name='weight')),
                ('slug', models.SlugField(default=None, max_length=100, verbose_name='slugField')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='CreatedAt')),
                ('modified', models.DateTimeField(editable=False, verbose_name='lastModified')),
                ('seller_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='sellerId')),
                ('tags', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.category', verbose_name='product')),
            ],
            options={
                'verbose_name_plural': 'Products',
            },
        ),
        migrations.CreateModel(
            name='Offers',
            fields=[
                ('discount_id', models.AutoField(primary_key=True, serialize=False, verbose_name='discountId')),
                ('discount_name', models.CharField(blank=True, max_length=100, null=True, verbose_name='discountName')),
                ('discount_description', models.TextField(blank=True, null=True, verbose_name='discountDescription')),
                ('discount_percent', models.IntegerField(blank=True, null=True, verbose_name='discount')),
                ('discount_start', models.DateTimeField(verbose_name='discountStart')),
                ('discount_end', models.DateTimeField(verbose_name='discountEnd')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('modified', models.DateTimeField(editable=False, verbose_name='lastModified')),
                ('active', models.BooleanField(default=False)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='product')),
            ],
            options={
                'verbose_name_plural': 'Offers',
            },
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('image_id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.URLField(blank=True, max_length=1000, null=True, verbose_name='image')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='lastModified')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='products.product', verbose_name='Product')),
            ],
            options={
                'verbose_name_plural': 'Images',
            },
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('review_id', models.AutoField(primary_key=True, serialize=False, verbose_name='reviewId')),
                ('review', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('modified', models.DateTimeField(editable=False, verbose_name='lastModified')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review_product', to='products.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name_plural': 'Reviews',
            },
        ),
    ]
