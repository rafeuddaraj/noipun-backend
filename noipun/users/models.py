from django.db import models
from core.models import CustomUser
# Create your models here.


class NID(models.Model):
    nid_id = models.AutoField(verbose_name='nidId', primary_key=True)
    seller = models.ForeignKey(
        to=CustomUser, on_delete=models.CASCADE, related_name='nid_seller')
    address = models.TextField(verbose_name='address', null=True, blank=True)
    front = models.URLField(verbose_name='front')
    back = models.URLField(verbose_name='back')
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='createdAt')

    def __str__(self) -> str:
        return self.seller.email

    class Meta:
        verbose_name_plural = 'National ID Cards'
