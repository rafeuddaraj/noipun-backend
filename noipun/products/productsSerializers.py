from rest_framework import serializers
from .models import Category,Images,Offers,Product,Reviews

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields ='__all__'


class ImagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields ='__all__'


class OffersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Offers
        fields ='__all__'

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields ='__all__'

        
class ReviewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields ='__all__'