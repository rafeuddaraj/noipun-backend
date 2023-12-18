from django.contrib import admin
from .models import Category,Images,Offers,Product,Reviews

# Register your models here.
# class CategoryAdmin(admin.ModelAdmin):
#     class Meta:
#         model = Category 
#         fields = '__all__'
        
admin.site.register(Category)
admin.site.register(Images)
admin.site.register(Offers)
admin.site.register(Product)
admin.site.register(Reviews)