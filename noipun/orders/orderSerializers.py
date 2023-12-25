from rest_framework import serializers
from .models import Orders,All_Orders,Carts,Shipping

class OrdersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields ='__all__'


class AllOrdersSerializers(serializers.ModelSerializer):
    class Meta:
        model = All_Orders
        fields ='__all__'


class CartsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Carts
        fields ='__all__'


class ShippingSerializers(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields ='__all__'
