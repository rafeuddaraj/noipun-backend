from django.db import models
from core.models import CustomUser
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length=50,null=True,blank=True,verbose_name="categoryName")
    category_description = models.TextField(verbose_name="categoryDescription", null = True,blank=True)
    created_at = models.DateTimeField(  auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    user = models.ManyToManyField(to=CustomUser,related_name='category',blank=True,verbose_name = "user")
    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name_plural = 'Categories'



class Images(models.Model):
    image_id = models.AutoField(primary_key=True)
    image = models.URLField(verbose_name="image",max_length=1000,null=True,blank=True)
    product = models.ForeignKey("Product", verbose_name="Product", on_delete=models.CASCADE,related_name="image")
    created_at = models.DateTimeField( auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    class Meta:
        verbose_name_plural = 'Images'


class Offers(models.Model):
    discount_id =   models.AutoField(primary_key=True,verbose_name="discountId")
    discount_name =  models.CharField( max_length=100,null=True,blank=True,verbose_name="discountName")   
    discount_description = models.TextField(verbose_name="discountDescription", null = True,blank=True)
    # Category discount 
    product = models.ForeignKey("Product", verbose_name="product",on_delete=models.CASCADE)
    discount_percent = models.IntegerField(null=True,blank=True,verbose_name="discount") 
    discount_start = models.DateTimeField( auto_now=False, auto_now_add=False,editable=True,verbose_name="discountStart")
    discount_end = models.DateTimeField( auto_now=False, auto_now_add=False,editable=True,verbose_name="discountEnd")
    created_at = models.DateTimeField( auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    active =  models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Offers'

class Product(models.Model):
    product_id  = models.AutoField(primary_key=True,verbose_name="productName")
    product_title = models.CharField( max_length=100,null=True,blank=True,verbose_name="productTitle")
    description = models.TextField(null=True,blank=True,verbose_name="productDescription")
    price = models.FloatField(default=0,null=True,blank=True,verbose_name="price",)
    seller_id = models.ForeignKey(CustomUser, verbose_name="sellerId", on_delete=models.CASCADE)
    tags = models.ForeignKey(Category, verbose_name="Category", on_delete=models.CASCADE)
    ratting =models.FloatField(default=0,verbose_name="ratting")
    is_available = models.BooleanField(default=True,verbose_name="availableStatus",null=True,blank=True)
    total_buyed =  models.IntegerField(default = 0,verbose_name="totalBuyed")
    delivery_is_free = models.BooleanField(default=False,verbose_name="deliveryStatus")
    weight =  models.FloatField(default = 0,verbose_name="weight",null=True,blank=True)
    slug=models.SlugField(verbose_name = "slugField",max_length = 100,default=None)
    created_at = models.DateTimeField(  auto_now_add=True,editable=False,verbose_name="CreatedAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')

    class Meta:
        verbose_name_plural = 'Products'

class Reviews(models.Model):
    review_id =  models.AutoField(primary_key=True,verbose_name="reviewId")
    user = models.ForeignKey(CustomUser, verbose_name="user", on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE,related_name = "review_product")
    review =  models.TextField(null=True,blank=True)
    created_at = models.DateTimeField( auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    class Meta:
        verbose_name_plural = 'Reviews'


