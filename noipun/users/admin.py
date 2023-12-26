from django.contrib import admin
from .models import NID, UserCategory
# Register your models here.


@admin.register(NID)
class NIDAdmin(admin.ModelAdmin):
    list_display = ('nid_id', 'seller', 'created_at')


@admin.register(UserCategory)
class UserCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'modified')
