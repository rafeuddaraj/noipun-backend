from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import UserManager
# Create your models here.


class CustomUser(AbstractBaseUser):
    USER_TYPES = (
        ('seller', 'Seller'),
        ('admin', 'Admin'),
        ('buyer', 'Buyer'),
    )
    email = models.EmailField(unique=True, verbose_name="email")
    name = models.CharField(max_length=30, verbose_name="name")
    account_status = models.CharField(max_length=10, choices=USER_TYPES, verbose_name="accountStatus")
    phone_number = models.CharField(
        max_length=15, verbose_name="phoneNumber")
    avatar = models.URLField(verbose_name='avatar')
    created_at = models.DateTimeField(
        editable=False, auto_now_add=True, verbose_name="createdAt")
    modified = models.DateTimeField(
        auto_now=True, editable=False, verbose_name="modified")

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    class Meta:
        verbose_name_plural = 'Users'
