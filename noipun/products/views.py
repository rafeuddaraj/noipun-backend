from django.shortcuts import render
from .productsSerializers import CategorySerializers,ReviewsSerializers,ImagesSerializers,OffersSerializers,ProductSerializers
from .models import Category,Images,Offers,Product,Reviews
from core.permissions import SellerOrReadOnly
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
# Create your views here.

# api for Categeory
class Category(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    # permission_classes = [IsAuthenticated]



# api for Images
class Images(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializers
    # permission_classes = [IsAuthenticated]



# api for Offers
class Offers(viewsets.ModelViewSet):
    queryset = Offers.objects.all()
    serializer_class = OffersSerializers
    # permission_classes = [IsAuthenticated]




# api for Products
class Product(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    # permission_classes = [IsAuthenticated]



# api for Reviews
class Reviews(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializers
    # permission_classes = [IsAuthenticated]




