from django.db import models
from core.models import CustomUser
# Create your models here.


class UserCategory(models.Model):
    name = models.CharField(max_length=50,null=True,blank=True,verbose_name="name")
    description = models.TextField(verbose_name="description", null = True,blank=True)
    created_at = models.DateTimeField(  auto_now_add=True,editable=False,verbose_name="createdAt")
    modified = models.DateTimeField(auto_now=True, editable=False,verbose_name='lastModified')
    user = models.ManyToManyField(to=CustomUser,related_name='userCategory',blank=True,verbose_name = "user")
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'UserCategories'


class NID(models.Model):
    nid_id = models.AutoField(verbose_name='nidId',primary_key=True)
    seller = models.ForeignKey(to=CustomUser,on_delete=models.CASCADE,related_name='nid_seller')
    front = models.URLField(verbose_name='front')
    back = models.URLField(verbose_name='back',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='createdAt')
    address = models.TextField(verbose_name="address")
    
    def __str__(self) -> str:
         return self.seller.email
    
    class Meta:
         verbose_name_plural = 'National ID Cards'