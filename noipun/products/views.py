from django.shortcuts import render
from .productsSerializers import CategorySerializers, ReviewsSerializers, ImagesSerializers, OffersSerializers, ProductSerializers
from .models import Category, Images, Offers, Product, Reviews  # Make sure your model names are correct
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, filters
from core.permissions import AdminOrReadOnly, ReviewOrReadOnly, SellerOrReadOnly
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

# Create your views here.

# api for Category
class CategoryViewSet(viewsets.ModelViewSet):  # Rename the class to avoid naming conflict
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = [AdminOrReadOnly]

# api for Images
class ImagesViewSet(viewsets.ModelViewSet):  # Rename the class to avoid naming conflict
    queryset = Images.objects.all()
    serializer_class = ImagesSerializers
    permission_classes = [IsAuthenticated]

# api for Offers
class OffersViewSet(viewsets.ModelViewSet):  # Rename the class to avoid naming conflict
    queryset = Offers.objects.all()
    serializer_class = OffersSerializers
    permission_classes = [AdminOrReadOnly]

# api for Products
class CustomPageNumberPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

class ProductViewSet(viewsets.ModelViewSet):  # Rename the class to avoid naming conflict
    serializer_class = ProductSerializers
    pagination_class = CustomPageNumberPagination
    queryset = Product.objects.all()  # Use the correct model name

    def get_queryset(self):
        queryset = Product.objects.all()  # Use the correct model name
        email = self.request.query_params.get('email')

        if email is not None:
            queryset = queryset.filter(seller_id__email__icontains=email)  # Fix the typo in 'icontains'

        return queryset

    def perform_create(self, serializer):
        serializer.save()
        return Response(data=serializer.data, status=201)

# api for Reviews
class ReviewsViewSet(viewsets.ModelViewSet):  # Rename the class to avoid naming conflict
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializers
    permission_classes = [ReviewOrReadOnly]
