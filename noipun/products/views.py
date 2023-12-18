from django.shortcuts import render
from .productsSerializers import CategorySerializers,ReviewsSerializers,ImagesSerializers,OffersSerializers,ProductSerializers
from .models import Category,Images,Offers,Product,Reviews
from core.permissions import SellerOrReadOnly
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
# Create your views here.

# api for Categeory
class CreateCategory(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = [IsAuthenticated]


class CategeoryDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = [IsAuthenticated]


# api for Images
class CreateImages(generics.ListCreateAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializers
    permission_classes = [IsAuthenticated]


class ImagesDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializers
    permission_classes = [IsAuthenticated]



# api for Offers
class CreateOffers(generics.ListCreateAPIView):
    queryset = Offers.objects.all()
    serializer_class = OffersSerializers
    permission_classes = [IsAuthenticated]


class OffersDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offers.objects.all()
    serializer_class = OffersSerializers
    permission_classes = [IsAuthenticated]


# api for Products
class CreateProduct(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    permission_classes = [IsAuthenticated]


class ProductDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    permission_classes = [IsAuthenticated]


# api for Reviews
class CreateReviews(generics.ListCreateAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializers
    permission_classes = [IsAuthenticated]


class ReviewDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializers
    permission_classes = [IsAuthenticated]



