from django.contrib import admin
from django.urls import path
from .views import CreateOrder,OrderDetails,CreateAllOrders,AllOrderDetails,CreateShipping,ShippingDetails,CreateCarts,CartsDetails

urlpatterns = [
    # url for order
    path('order-create/',CreateOrder.as_view(),name="orderCreate"),
    path('order-details/<int:pk>/',OrderDetails.as_view(),name="orderDetails"),

    # url for All Orders
    path('allorder-create/',CreateAllOrders.as_view(),name="allOrderCreate"),
    path('allorder-details/<int:pk>/',AllOrderDetails.as_view(),name="allOrderDetails"),

    # url for shipping
    path('shipping-create/',CreateShipping.as_view(),name="shippingCreate"),
    path('shipping-details/<int:pk>/',ShippingDetails.as_view(),name="shippingDetails"),

    # url for All cart
    path('carts-create/',CreateCarts.as_view(),name="cartsCreate"),
    path('carts-details/<int:pk>/',CartsDetails.as_view(),name="cartsDetails"),



]

