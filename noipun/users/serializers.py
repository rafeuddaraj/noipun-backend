from core.models import CustomUser
from rest_framework.serializers import ModelSerializer, CharField, EmailField, ValidationError,URLField
from core.models import CustomUser
from .models import NID
from products.models import Category
from django.core.mail import send_mail,EmailMessage
from django.conf import settings
import os
from .utils import generate_key



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
        subject = 'Activate Your Account - Email Verification with Noipun'
        users_folder_path = os.path.join(settings.BASE_DIR, 'users','templates')
        key = generate_key()
        ids = str(key[::-1])
        # Construct the path to the 'email.txt' file within the 'users' folder
        email_txt_path = os.path.join(users_folder_path, 'email.html')
        
        with open(email_txt_path) as file:
            email_content = file.read()

            email_content = email_content.replace('{{ name }}', account.name)
            email_content = email_content.replace('{{ activeLink }}', f'{settings.DOMAIN_NAME}/{key + str(account.id)}/{account.name}/{ids}-id-{str(account.id)}-{key+key}')
            
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
        
        subject = 'Activate Your Account - Email Verification with Noipun'
        users_folder_path = os.path.join(settings.BASE_DIR, 'users','templates')
        key = generate_key()
        ids = str(key[::-1])
        # Construct the path to the 'email.txt' file within the 'users' folder
        email_txt_path = os.path.join(users_folder_path, 'email.html')
        
        with open(email_txt_path) as file:
            email_content = file.read()

            email_content = email_content.replace('{{ name }}', account.name)
            email_content = email_content.replace('{{ activeLink }}', f'{settings.DOMAIN_NAME}/{key + str(account.id)}/{account.name}/{ids}-id-{str(account.id)}-{key+key}')
            
        email_from = settings.EMAIL_HOST_USER
        
        mail = EmailMessage(subject,email_content,email_from,[account.email])
        mail.content_subtype = 'html'
        mail.send()
        
        return account