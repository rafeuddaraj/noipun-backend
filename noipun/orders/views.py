from django.shortcuts import render
from core.permissions import SellerOrReadOnly
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets

# Create your views here.
from .models import Orders,All_Orders,Shipping,Carts
from .orderSerializers import OrdersSerializers,AllOrdersSerializers,CartsSerializers,ShippingSerializers


## api for order
class Order(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializers
    permission_classes = [IsAuthenticated]



# api for All_Orders

class OrderDetails(viewsets.ModelViewSet):
    queryset = All_Orders.objects.all()
    serializer_class = AllOrdersSerializers
    permission_classes = [IsAuthenticated]



# api for shiping 

class ShippingDetails(viewsets.ModelViewSet):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializers
    permission_classes = [IsAuthenticated]


# api for   Cart 
class CartsDetails(viewsets.ModelViewSet):
    queryset = Carts.objects.all()
    serializer_class = CartsSerializers
    permission_classes = [IsAuthenticated]