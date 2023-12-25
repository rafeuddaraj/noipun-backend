<<<<<<< HEAD
# Generated by Django 5.0 on 2023-12-23 12:32
=======
# Generated by Django 5.0 on 2023-12-19 14:23
>>>>>>> dc7ee253bce376d2ebcb0fd80c233520b99f5b56

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
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nid_seller', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'National ID Cards',
            },
        ),
    ]
