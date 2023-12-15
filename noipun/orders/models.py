from django.db import models

# Create your models here.

class Carts(models.Model):
    # cart id will be created auto
    #  user id 
    # order_items
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')


class Orders(models.Model):
    # order_item
    # user_id
    # product_id
    quantity =  models.IntegerField(default=0,null = False)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')

class Shipping(models.Model):
    name = models.CharField(max_length=80,null=False,blank=False,varbose_name="name")
    phone_number =  models.CharField( max_length=11,null=False,blank=False)
    alt_number =  models.CharField( max_length=11,null=False,blank=False)
    # city 
    # area 
    # zone 
    details_adress = models.models.TextField(null=False,blank= False,varbose_name="Details_Adress")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')


class All_Orders(models.Model):
    # all_orders_id
    # orders
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')




