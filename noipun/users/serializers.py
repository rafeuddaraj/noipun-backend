from core.models import CustomUser
from rest_framework.serializers import ModelSerializer,Serializer, CharField, EmailField, ValidationError,URLField,IntegerField
from core.models import CustomUser
from .models import NID, UserCategory
from django.core.mail import send_mail,EmailMessage
from django.conf import settings
import os
from .utils import generate_key
from django.contrib.auth import get_user_model,password_validation
from django.shortcuts import get_object_or_404
from django.contrib.auth.tokens import default_token_generator
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import update_last_login


class UserCategorySerializer(ModelSerializer):
    class Meta:
        model = UserCategory
        exclude = ('user','created_at','modified')

class NIDSerializer(ModelSerializer):
    class Meta:
        model = NID
        exclude = ('seller','created_at')

class UserSerializer(ModelSerializer):
    userCategory = UserCategorySerializer(many=True,read_only=True)
    nid_seller = NIDSerializer(many=True,read_only=True)
    class Meta:
        model = CustomUser
        exclude = ('password',)


class UserVerifiedSerializer (ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('is_verified','email')

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
        token,create = Token.objects.get_or_create(user=account)
        subject = 'Activate Your Account - Email Verification with Noipun'
        users_folder_path = os.path.join(settings.BASE_DIR, 'users','templates')
        # Construct the path to the 'email.txt' file within the 'users' folder
        email_txt_path = os.path.join(users_folder_path, 'email.html')
        with open(email_txt_path) as file:
            email_content = file.read()

            email_content = email_content.replace('{{ name }}', account.name)
            email_content = email_content.replace('{{ activeLink }}', f'{settings.DOMAIN_NAME}/users/email-verification/{account.name.replace(" ","").lower()}/{account.id}/{token.key}')
            
        email_from = settings.EMAIL_HOST_USER
        
        mail = EmailMessage(subject,email_content,email_from,[account.email])
        mail.content_subtype = 'html'
        mail.send()
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
        token,create = Token.objects.get_or_create(user=account)
        subject = 'Activate Your Account - Email Verification with Noipun'
        users_folder_path = os.path.join(settings.BASE_DIR, 'users','templates')
        # Construct the path to the 'email.txt' file within the 'users' folder
        email_txt_path = os.path.join(users_folder_path, 'email.html')
        

        with open(email_txt_path) as file:
            email_content = file.read()

            email_content = email_content.replace('{{ name }}', account.name)
            email_content = email_content.replace('{{ activeLink }}', f'{settings.DOMAIN_NAME}/users/email-verification/{account.name.replace(" ","").lower()}/{account.id}/{token.key}')
            
        email_from = settings.EMAIL_HOST_USER
        
        mail = EmailMessage(subject,email_content,email_from,[account.email])
        mail.content_subtype = 'html'
        mail.send()
        
        return account
class ForgetEmailInputSerializer(Serializer):
    email = EmailField(write_only=True)
    
# Change Password from user

class PasswordChangeSerializer(Serializer):
    old_password = CharField(required=True)
    new_password = CharField(required=True)
    confirm_password = CharField(required=True)

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise ValidationError("Incorrect old password.")
        return value

    def validate(self, data):
        if data['new_password'] != data['confirm_password']:
            raise ValidationError("New password and confirm password do not match.")
        return data

    def validate_new_password(self, value):
        password_validation.validate_password(value)
        return value

    def save(self):
        user = self.context['request'].user
        user.set_password(self.validated_data['new_password'])
        user.save()
        
        # Invalidate existing token (if any)
        try:
            token = Token.objects.get(user=user)
            token.delete()
        except Token.DoesNotExist:
            pass
        
        update_last_login(None, user)
        return user
# Update profile from user

class UpdateProfileSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'avatar']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.save()
        return instance
class SellerUpdateProfileSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'avatar','shop_name','phone_number','address']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.shop_name = validated_data.get('shop_name', instance.shop_name)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

class ForgetPasswordSerializer(Serializer):
    password = CharField(write_only=True)
    password2 = CharField(write_only=True)

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if password != password2:
            raise ValidationError("Passwords don't match")

        return data

    def save(self, user):
        user.set_password(self.validated_data['password'])
        user.save()