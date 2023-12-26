from django.db import models
from core.models import CustomUser
from products.models import Product


# Create your models here.
class Orders(models.Model):
    order_item = models.AutoField(primary_key=True,verbose_name="orderItem")
    user_id = models.ForeignKey(CustomUser, verbose_name="userId", on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, verbose_name="productId", on_delete=models.CASCADE)
    quantity =  models.IntegerField(default=0,null = False, verbose_name = "quantity")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    class Meta:
        verbose_name_plural = 'Orders'


class Carts(models.Model):
    cart_id = models.AutoField(primary_key=True,verbose_name="carstId")
    user_id = models.ForeignKey(CustomUser, verbose_name="userId", on_delete=models.CASCADE)
    order_item = models.ManyToManyField(Orders, verbose_name="orderItem")
    created_at = models.DateTimeField(  auto_now_add=True,editable=False,verbose_name="CreatedAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='castModified')
    class Meta:
        verbose_name_plural = 'Carts'


class Shipping(models.Model):
    name = models.CharField(max_length=80,null=False,blank=False,verbose_name="name")
    phone_number =  models.CharField( max_length=11,null=False,blank=False,verbose_name="phoneNumber")
    another_phone_number =  models.CharField( max_length=11,null=False,blank=False,verbose_name = "anotherPhone_number")
    city = models.CharField(max_length=100,null=False,blank=False,verbose_name = "city")
    area = models.CharField(max_length=100,null=False,blank=False,verbose_name = "area")
    zone = models.CharField(max_length=100,null=False,blank=False,verbose_name = "zone") 
    details_adress = models.TextField(null=False,blank= False,verbose_name="detailsAdress")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    class Meta:
        verbose_name_plural = 'Shopping'

class All_Orders(models.Model):
    all_orders_id =  models.AutoField(primary_key=True,verbose_name="allOrdersId")
    orders = models.ForeignKey(Orders, verbose_name="orders", on_delete=models.CASCADE)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    class Meta:
        verbose_name_plural = 'AllOrders'



