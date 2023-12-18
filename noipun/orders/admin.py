from django.contrib import admin
from .models import Orders,All_Orders,Carts,Shipping

# Register your models here.
admin.site.register(Orders)
admin.site.register(All_Orders)
admin.site.register(Carts)
admin.site.register(Shipping)
