from django.db import models
from core.models import CustomUser
from products.models import Product


# Create your models here.
class Orders(models.Model):
    order_item = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(CustomUser, verbose_name="userId", on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, verbose_name="productId", on_delete=models.CASCADE)
    quantity =  models.IntegerField(default=0,null = False)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')


class Carts(models.Model):
    cart_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(CustomUser, verbose_name="userId", on_delete=models.CASCADE)
    order_item = models.ForeignKey(Orders, verbose_name="orderItem", on_delete=models.CASCADE)
    created_at = models.DateTimeField(  auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')



class Shipping(models.Model):
    name = models.CharField(max_length=80,null=False,blank=False,verbose_name="name")
    phone_number =  models.CharField( max_length=11,null=False,blank=False,verbose_name="phoneNumber")
    another_phone_number =  models.CharField( max_length=11,null=False,blank=False,verbose_name = "another_phone_number")
    city = models.CharField(max_length=100,null=False,blank=False,verbose_name = "city")
    area = models.CharField(max_length=100,null=False,blank=False,verbose_name = "area")
    zone = models.CharField(max_length=100,null=False,blank=False,verbose_name = "zone") 
    details_adress = models.TextField(null=False,blank= False,verbose_name="Details_Adress")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')


class All_Orders(models.Model):
    all_orders_id =  models.AutoField(primary_key=True)
    orders = models.ForeignKey(Orders, verbose_name="orders", on_delete=models.CASCADE)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')




