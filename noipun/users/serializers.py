from core.models import CustomUser
from rest_framework.serializers import ModelSerializer, CharField, EmailField, ValidationError
from core.models import CustomUser
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class UserSerializer(ModelSerializer):
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
        return account
