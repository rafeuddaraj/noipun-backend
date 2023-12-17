from django.contrib import admin
from .models import NID
# Register your models here.

class NIDAdmin(admin.ModelAdmin):
    class Meta:
        model = NID
        fields = ('nid_id','seller','created_at')
        
admin.site.register(NID,NIDAdmin)