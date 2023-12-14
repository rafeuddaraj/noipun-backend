from django.db import models

# Create your models here.


class Product(models.Model):
    # product id will Auto genatreted
    product_title = models.CharField( max_length=100,null=False,blank=False,verbose_name="Product_Title")
    # images will be inherited
    description = models.TextField(null=False,blank=False,verbose_name="Product_Description")
    # offers will be inherited
    price = models.FloatField(default=0,null=False,blank=False,verbose_name="Price")
    # seller wil be inherited
    # tags wil be inherited
    ratting =models.FloatField(default=0,verbose_name="Ratting")
    # review will be inherited
    is_available = models.BooleanField(default=True,verbose_name="Available_Status")
    total_buyed =  models.IntegerField(default = 0,verbose_name="Total_Buyed")
    delivery_is_free = models.BooleanField(default=False,verbose_name="Delivery_Status")
    weight =  models.FloatField(default = 0,verbose_name="Weight")
    # slug i cant understand
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')



class Categeory(models.Model):
    # Categeory Id wil be Auto generated
    categeory_name = models.CharField(max_length=50,null=False,blank=False,verbose_name="Categeory_Name")
    categeory_description = models.TextField(verbose_name="Categeory_Description", null = True,blank=True)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')


class Discount(models.Model):
    # Discount id will be auto generated 
    discount_name =  models.CharField( max_length=100,nul=False,blank=False,verbose_name="Discount_Name")   
    discount_description = models.TextField(verbose_name="Discount_Description", null = True,blank=True)
    # categeory discount 
    discount_percent = models.IntegerField(null=False,blank=False,verbose_name="Discount") 
    discount_start = models.DateTimeField( auto_now=False, auto_now_add=False,editable=True,verbose_name="Discount_start")
    discount_end = models.DateTimeField( auto_now=False, auto_now_add=False,editable=True,verbose_name="Discount_End")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')
    active =  models.BooleanField(default=False)

class Reviews(models.Model):
    # Review  id will auto genrated
    # user =
    product_id = models.ForeignKey("Product",  on_delete=models.CASCADE)
    review =  models.TextField(null=False,blank=False)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')

class Images(models.Model):
    # Image id 
    # seller_id =
    image = models.ImageField( upload_to=None,)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')






