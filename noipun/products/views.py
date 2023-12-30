from django.shortcuts import render
from .productsSerializers import CategorySerializers,ReviewsSerializers,ImagesSerializers,OffersSerializers,ProductSerializers
from .models import Category,Images,Offers,Product,Reviews
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from core.permissions import AdminOrReadOnly, ReviewOrReadOnly, SellerOrReadOnly
from rest_framework.response import Response

# Create your views here.

# api for Categeory
class Category(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = [AdminOrReadOnly]



# api for Images
class Images(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializers
    permission_classes = [IsAuthenticated]



# api for Offers
class Offers(viewsets.ModelViewSet):
    queryset = Offers.objects.all()
    serializer_class = OffersSerializers
    permission_classes = [AdminOrReadOnly]




# api for Products
class Product(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    # permission_classes = [SellerOrReadOnly]
    def perform_create(self, serializer):
        # user = self.request.user
        # print(user.account_status)
        # if(user.account_status == 'seller') :
        serializer.save()
        return Response(data=serializer.data, status=201)
        # return Response({"message":"Product Post only seller"} ,status=400)



# api for Reviews
class Reviews(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializers
    permission_classes = [ReviewOrReadOnly]




