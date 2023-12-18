from django.shortcuts import render
from core.permissions import SellerOrReadOnly
from rest_framework.permissions import IsAuthenticated

# Create your views here.
from .models import Orders,All_Orders,Shipping,Carts
from .orderSerializers import OrdersSerializers,AllOrdersSerializers,CartsSerializers,ShippingSerializers
from rest_framework import generics

## api for order
class CreateOrder(generics.ListCreateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializers
    permission_classes = [IsAuthenticated]


class OrderDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializers
    permission_classes = [IsAuthenticated]


# api for All_Orders

class CreateAllOrders(generics.ListCreateAPIView):
    queryset = All_Orders.objects.all()
    serializer_class = AllOrdersSerializers
    permission_classes = [IsAuthenticated]


class AllOrderDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = All_Orders.objects.all()
    serializer_class = AllOrdersSerializers
    permission_classes = [IsAuthenticated]



# api for shiping 

class CreateShipping(generics.ListCreateAPIView):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializers
    permission_classes = [IsAuthenticated]


class ShippingDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializers
    permission_classes = [IsAuthenticated]


# api for   Cart 
class CreateCarts(generics.ListCreateAPIView):
    queryset = Carts.objects.all()
    serializer_class = CartsSerializers
    permission_classes = [IsAuthenticated]


class CartsDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Carts.objects.all()
    serializer_class = CartsSerializers
    permission_classes = [IsAuthenticated]