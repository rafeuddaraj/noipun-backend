from rest_framework import serializers
from .models import Category, Images, Offers, Product, Reviews


class ImagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'


class OffersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Offers
        fields = '__all__'


class ReviewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'


class ProductSerializers(serializers.ModelSerializer):
    image = ImagesSerializers(many=True, read_only=True)
    review_product = ReviewsSerializers(many=True, read_only=True)

    class Meta:
        model = Product
        exclude = ('seller_id',)

    def create(self, validated_data):
        product_title = validated_data['product_title']
        description = validated_data['description']
        price = validated_data['price']
        seller_id = self.context['request'].user
        category = validated_data['category']
        is_available = validated_data['is_available']
        total_buyed = validated_data['total_buyed']
        delivery_is_free = validated_data['delivery_is_free']
        weight = validated_data['weight']

        product_instance = Product(
            product_title=product_title,
            description=description,
            price=price,
            seller_id=seller_id,
            category=category,
            is_available=is_available,
            total_buyed=total_buyed,
            delivery_is_free=delivery_is_free,
            weight=weight,
        )

        # Only save the product if the user is a seller
        if seller_id.account_status == 'seller':
            product_instance.save()

        return product_instance


class CategorySerializers(serializers.ModelSerializer):
    product = ProductSerializers(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'
