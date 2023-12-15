from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'name', 'is_staff', 'is_superuser')
    search_fields = ('email', 'name')
    readonly_fields = ('created_at', 'modified')

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Account Status', {'fields': ('account_status',)}),
        ('Personal Info', {'fields': ('name', 'phone_number')}),
        ('Profile Picture', {'fields': ('avatar',)}),
        ('Permissions', {
         'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important dates', {
         'fields': ('last_login', 'created_at', 'modified')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'phone_number', 'avatar', 'password1', 'password2'),
        }),
    )

    filter_horizontal = ()

    ordering = ('email',)
    list_filter = ('is_active', 'is_staff', 'is_superuser')


admin.site.register(CustomUser, CustomUserAdmin)
