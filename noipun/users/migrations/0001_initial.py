# Generated by Django 5.0 on 2023-12-28 16:47

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
            name='NID',
            fields=[
                ('nid_id', models.AutoField(primary_key=True, serialize=False, verbose_name='nidId')),
                ('front', models.URLField(verbose_name='front')),
                ('back', models.URLField(verbose_name='back')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('address', models.TextField(verbose_name='address')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nid_seller', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'National ID Cards',
            },
        ),
        migrations.CreateModel(
            name='UserCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True, verbose_name='name')),
                ('description', models.TextField(blank=True, null=True, verbose_name='description')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdAt')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='lastModified')),
                ('user', models.ManyToManyField(blank=True, related_name='userCategory', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name_plural': 'UserCategories',
            },
        ),
    ]
