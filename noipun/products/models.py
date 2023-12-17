from django.db import models
from core.models import CustomUser

# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length=50,null=False,blank=False,verbose_name="Category_Name")
    category_description = models.TextField(verbose_name="Category_Description", null = True,blank=True)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')
    user = models.ManyToManyField(to=CustomUser,related_name='category',blank=True)
    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name_plural = 'Categories'



class Images(models.Model):
    image_id = models.AutoField(primary_key=True)
    # seller_id =

    image = models.URLField(verbose_name="image")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')

class Offers(models.Model):
    # Discount id will be auto generated 


    discount_name =  models.CharField( max_length=100,null=False,blank=False,verbose_name="Discount_Name")   
    discount_description = models.TextField(verbose_name="Discount_Description", null = True,blank=True)
    # Category discount 
    discount_percent = models.IntegerField(null=False,blank=False,verbose_name="Discount") 
    discount_start = models.DateTimeField( auto_now=False, auto_now_add=False,editable=True,verbose_name="Discount_start")
    discount_end = models.DateTimeField( auto_now=False, auto_now_add=False,editable=True,verbose_name="Discount_End")
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')
    active =  models.BooleanField(default=False)

class Product(models.Model):
    product_id  = models.AutoField(primary_key=True)
    product_title = models.CharField( max_length=100,null=False,blank=False,verbose_name="Product_Title")
    image = models.ForeignKey(Images, verbose_name="images", on_delete=models.CASCADE)
    description = models.TextField(null=False,blank=False,verbose_name="Product_Description")
    offers = models.ForeignKey(Offers, verbose_name="offers",on_delete=models.CASCADE,related_name="product")
    # offers = models.ManyToManyField("app.Model", verbose_name=_(""))
    price = models.FloatField(default=0,null=False,blank=False,verbose_name="Price")
    seller_id = models.ForeignKey(CustomUser, verbose_name="sellerId", on_delete=models.CASCADE)
    tags = models.ForeignKey(Category, verbose_name="product", on_delete=models.CASCADE)
    ratting =models.FloatField(default=0,verbose_name="Ratting")
    reviews= models.ForeignKey("Reviews", verbose_name="reviews", on_delete=models.CASCADE,related_name="product_review")
    is_available = models.BooleanField(default=True,verbose_name="Available_Status")
    total_buyed =  models.IntegerField(default = 0,verbose_name="Total_Buyed")
    delivery_is_free = models.BooleanField(default=False,verbose_name="Delivery_Status")
    weight =  models.FloatField(default = 0,verbose_name="Weight")
    # slug i cant understand
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')

class Reviews(models.Model):
    review_id =  models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, verbose_name="user", on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE,related_name = "review_product")
    review =  models.TextField(null=False,blank=False)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')










