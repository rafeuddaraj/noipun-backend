from django.db import models
from core.models import CustomUser
from django.utils import timezone
from django.utils.text import slugify


# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50, verbose_name="name")
    description = models.TextField(
        verbose_name="description")
    created_at = models.DateTimeField(
        auto_now_add=True, editable=False, verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True,editable=False, verbose_name='lastModified')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Images(models.Model):
    image_id = models.AutoField(primary_key=True)
    image = models.URLField(verbose_name="image",max_length=1000)
    product = models.ForeignKey(
        "Product", verbose_name="Product", on_delete=models.CASCADE, related_name="image")
    created_at = models.DateTimeField(
        auto_now_add=True, editable=False, verbose_name="createdAt")
    modified = models.DateTimeField(
        auto_now=True, editable=False, verbose_name='lastModified')

    class Meta:
        verbose_name_plural = 'Images'

    def __str__(self):
        return f'{self.product.product_title}'


class Offers(models.Model):
    discount_id = models.AutoField(primary_key=True, verbose_name="discountId")
    discount_name = models.CharField(
        max_length=100, verbose_name="discountName")
    discount_description = models.TextField(
        verbose_name="discountDescription")
    # Category discount
    product = models.ManyToManyField(
        "Product", verbose_name="product")
    discount_percent = models.IntegerField( verbose_name="discount")
    discount_start = models.DateTimeField(
        auto_now=False, auto_now_add=False, editable=True, verbose_name="discountStart")
    discount_end = models.DateTimeField(
        auto_now=False, auto_now_add=False, editable=True, verbose_name="discountEnd")
    created_at = models.DateTimeField(
        auto_now_add=True, editable=False, verbose_name="createdAt")
    modified = models.DateTimeField(
        auto_now=True, editable=False, verbose_name='lastModified')
    active = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Offers'

    def __str__(self):
        return f'{self.discount_name} {self.active}'


class Product(models.Model):
    product_title = models.CharField(
        max_length=100,verbose_name="productTitle")
    description = models.TextField( verbose_name="productDescription")
    price = models.FloatField(verbose_name="price",)
    seller_id = models.ForeignKey(
        CustomUser, verbose_name="sellerId", on_delete=models.CASCADE)
    ratting = models.FloatField(default=0, verbose_name="ratting")
    is_available = models.BooleanField(
        default=True, verbose_name="availableStatus")
    total_buyed = models.IntegerField(default=0, verbose_name="totalBuyed")
    quantity = models.PositiveBigIntegerField()
    delivery_is_free = models.BooleanField(
        default=False, verbose_name="deliveryStatus")
    weight = models.FloatField(
        default=0, verbose_name="weight")
    slug = models.SlugField(verbose_name="slugField",
                            max_length=100,unique=True,primary_key=True)
    created_at = models.DateTimeField(
        auto_now_add=True, editable=False, verbose_name="createdAt")
    modified = models.DateTimeField(
        auto_now=True, editable=False, verbose_name='lastModified')
    category = models.ForeignKey(to='Category', related_name='product',
                                 on_delete=models.CASCADE, verbose_name="category", default='')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.product_title)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Products'
    def __str__(self) -> str:
        return f'{self.product_title} - {self.seller_id.name}'


class Reviews(models.Model):
    review_id = models.AutoField(primary_key=True, verbose_name="reviewId")
    user = models.ForeignKey(
        CustomUser, verbose_name="user", on_delete=models.CASCADE)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="review_product")
    review = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True, editable=False, verbose_name="createdAt")
    modified = models.DateTimeField(
        auto_now=True, editable=False, verbose_name='lastModified')

    class Meta:
        verbose_name_plural = 'Reviews'
        unique_together = ['user', 'product_id']

    def __str__(self):
        return f'{self.product_id.product_title} - {self.user.name} - {self.user.shop_name}'
