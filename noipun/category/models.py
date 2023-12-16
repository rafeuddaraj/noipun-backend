from django.db import models

# Create your models here.

class Category(models.Model):
    category_name = models.CharField(max_length=50,null=False,blank=False,verbose_name="Category_Name")
    category_description = models.TextField(verbose_name="Category_Description", null = True,blank=True)
    created_at = models.DateTimeField( auto_now=False, auto_now_add=True,editable=False,verbose_name="Created_At")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='Last_Modified')
    
    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name_plural = 'Categories'