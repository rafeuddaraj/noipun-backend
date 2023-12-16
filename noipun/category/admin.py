from django.contrib import admin
from .models import Category
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    class Meta:
        model = Category 
        fields = ('id','category_name','created_at')
        
admin.site.register(Category,CategoryAdmin)