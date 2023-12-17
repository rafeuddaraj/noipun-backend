from core.models import CustomUser
from rest_framework.serializers import ModelSerializer, CharField, EmailField, ValidationError,URLField
from core.models import CustomUser
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import NID
from products.models import Category
# from allauth.account.utils import send_email_confirmation


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        exclude = ('user','created_at','modified')

class NIDSerializer(ModelSerializer):
    class Meta:
        model = NID
        exclude = ('seller','created_at')

class UserSerializer(ModelSerializer):
    category = CategorySerializer(many=True,read_only=True)
    nid_seller = NIDSerializer(many=True,read_only=True)
    class Meta:
        model = CustomUser
        exclude = ('password',)


class RegisterSerializer(ModelSerializer):
    password2 = CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'name', 'password', 'password2')

    def save(self):
        email = self.validated_data['email']
        name = self.validated_data['name']
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if (password != password2):
            raise ValidationError("Password doesn't match!")

        if CustomUser.objects.filter(email=email).exists():
            raise ValidationError("This user are already exist")

        account = CustomUser(email=email, name=name)
        account.is_verified = False
        account.account_status = 'buyer'
        account.set_password(password)
        account.save()
        # Send email confirmation
        # send_email_confirmation(self.context['request'], account)
        return account
    

class SellerRegistrationSerializer(ModelSerializer):
    password2 = CharField(style={"input_type": "password"}, write_only=True)
    
    
    front = URLField(write_only=True)
    back = URLField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'name', 'password', 'password2','shop_name','address','front','back')

    def save(self):
        email = self.validated_data['email']
        name = self.validated_data['name']
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        
        shopName = self.validated_data['shop_name']
        address = self.validated_data['address']
        front = self.validated_data['front']
        back = self.validated_data['back']

        if (password != password2):
            raise ValidationError("Password doesn't match!")

        if CustomUser.objects.filter(email=email).exists():
            raise ValidationError("This user are already exist")

        account = CustomUser(email=email, name=name,shop_name=shopName,address=address)
        account.is_verified = False
        account.account_status = 'seller'
        account.set_password(password)
        account.save()
        nid = NID(seller=account,front=front,back=back)
        nid.save()
        # Send email confirmation
        # send_email_confirmation(self.context['request'], account)
        return account