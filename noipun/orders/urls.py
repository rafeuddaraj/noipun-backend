from django.contrib import admin
from django.urls import path
from .views import Order,OrderDetails,ShippingDetails,CartsDetails


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
    # url for order
    path('order/',full_list(Order),name="orderDetails"),
    path('order/<int:pk>/',single_list(Order),name="orderDetailsSingle"),

    # url for All Orders
    path('allorder/',full_list(OrderDetails),name="allOrderDetails"),
    path('allorder/<int:pk>/',single_list(OrderDetails),name="allOrderDetailsSingle"),

    # url for shipping
    path('shipping/',full_list(ShippingDetails),name="shippingDetails"),
    path('shipping/<int:pk>/',single_list(ShippingDetails),name="shippingDetailsSingle"),

    # url for All cart
    path('carts/',full_list(CartsDetails),name="cartsDetails"),
    path('carts/<int:pk>/',single_list(CartsDetails),name="cartsDetailsSingle"),



]

