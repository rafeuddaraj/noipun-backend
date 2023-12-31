from django.contrib import admin
from django.urls import path
from .views import CategoryViewSet, ImagesViewSet, OffersViewSet, ReviewsViewSet, ProductViewSet

def full_list(obj):
    return obj.as_view({
        'get': 'list',
        'post': 'create',
    })

def single_list(obj):
    return obj.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update',
        'delete': 'destroy'
    })

urlpatterns = [
    # URL for Category
    path('category/', full_list(CategoryViewSet), name="category-details"),
    path('category/<int:pk>/', single_list(CategoryViewSet), name="category-details"),

    # URL for Images
    path('images/', full_list(ImagesViewSet), name="images-details"),
    path('images/<int:pk>/', single_list(ImagesViewSet), name="images-details"),

    # URL for Reviews
    path('reviews/', full_list(ReviewsViewSet), name="reviews-create"),
    path('reviews/<int:pk>/', single_list(ReviewsViewSet), name="reviews-details"),

    # URL for Offers
    path('offers/', full_list(OffersViewSet), name="offers-details"),
    path('offers/<int:pk>/', single_list(OffersViewSet), name="offers-details"),

    # URL for Products
    path('product/', full_list(ProductViewSet), name="product-details"),
    path('product/<int:pk>/', single_list(ProductViewSet), name="product-details"),
]
