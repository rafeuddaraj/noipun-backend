from django.contrib import admin
from django.urls import path
from .views import CreateCategory,CategeoryDetails,CreateImages,ImagesDetails,CreateOffers,OffersDetails,CreateReviews,ReviewDetails,CreateProduct,ProductDetails


urlpatterns = [
    # url for Category
    path('category-create/',CreateCategory.as_view(),name="categoryCreate"),
    path('category-details/<int:pk>/',CategeoryDetails.as_view(),name="categpryDetails"),

    # url for Images
    path('images-create/',CreateImages.as_view(),name="imagesCreate"),
    path('images-details/<int:pk>/',ImagesDetails.as_view(),name="imagesDetails"),

    # url for Reviews
    path('reviews-create/',CreateReviews.as_view(),name="reviewsCreate"),
    path('reviews-details/<int:pk>/',ReviewDetails.as_view(),name="reviewsDetails"),

    # url for Offers
    path('offers-create/',CreateOffers.as_view(),name="offersCreate"),
    path('offers-details/<int:pk>/',OffersDetails.as_view(),name="offersDetails"),

    # url for Products
    path('product-create/',CreateProduct.as_view(),name="productCreate"),
    path('product-details/<int:pk>/',ProductDetails.as_view(),name="productDetails"),



]

