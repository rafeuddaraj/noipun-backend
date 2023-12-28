from django.contrib import admin
from django.urls import path
from .views import Category,Images,Offers,Reviews,Product


def full_list(obj):
    list = obj.as_view({
        'get': 'list',
        'post': 'create',
    })
    return list

def single_list(obj):
    single = obj.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update',
        'delete': 'destroy'
    })
    
    return single



urlpatterns = [
    # url for Category
    path('category/',full_list(Category),name="categpryDetails"),
    path('category/<int:pk>/',single_list(Category),name="categpryDetails"),

    # url for Images
    path('images/',full_list(Images),name="imagesDetails"),
    path('images/<int:pk>/',single_list(Images),name="imagesDetails"),

    # url for Reviews
    path('reviews/',full_list(Reviews),name="reviewsCreate"),
    path('reviews/<int:pk>/',single_list(Reviews),name="reviewsDetails"),

    # url for Offers
    path('offers/',full_list(Offers),name="offersDetails"),
    path('offers/<int:pk>/',single_list(Offers),name="offersDetails"),

    # url for Products
    path('product/',full_list(Product),name="productDetails"),
    path('product/<str:pk>/',single_list(Product),name="productDetails"),



]

