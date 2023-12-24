from core.models import CustomUser
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from core.permissions import Private
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer, SellerRegistrationSerializer, ForgetEmailInputSerializer, ForgetPasswordSerializer, PasswordChangeSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth.tokens import default_token_generator
from . import signals
from django.shortcuts import render, HttpResponse, redirect
from django.views import View
from .utils import id_maker, generate_key
from django.core.mail import EmailMessage
from django.conf import settings
import os
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.serializers import ValidationError
from .forms import ForgetPasswordForm
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class GetUsers(APIView):
    permission_classes = [Private]

    def get(self, request, *args, **kwargs):
        users = CustomUser.objects.all()
        serializer = UserSerializer(instance=users, many=True)
        return Response(serializer.data)


class Login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'accessToken': token.key,
            'user_id': user.pk,
            'email': user.email,
            'accountStatus': user.account_status,
            'name': user.name,
            'isVerified': user.is_verified,
            'avatar': user.avatar,
            'password': user.password,

        }, status=HTTP_200_OK)


class SellerLogin(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        if (user.account_status == 'seller'):
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'accessToken': token.key,
                'user_id': user.pk,
                'email': user.email,
                'accountStatus': user.account_status,
                'name': user.name,
                'avatar': user.avatar
            }, status=HTTP_200_OK)
        return Response({"message": "It's not seller id."}, status=HTTP_400_BAD_REQUEST)


class Logout(APIView):
    def post(self, request, *args, **kwargs):
        if (request.user.auth_token):
            request.user.auth_token.delete()
            return Response({'message': "Logout successful"}, status=HTTP_200_OK)
        return Response({"There was a error!"}, status=HTTP_400_BAD_REQUEST)


class SellerRegistrationView(APIView):
    def post(self, request):
        serializer = SellerRegistrationSerializer(data=request.data)
        if (serializer.is_valid()):
            user = serializer.save()
            return Response({
                'accessToken': Token.objects.get(user=user).key,
                'email': user.email,
                'name': user.name,
                'accountStatus': user.account_status,
                'isVerified': user.is_verified
            }, status=HTTP_201_CREATED)

        return Response(data=serializer.errors, status=HTTP_400_BAD_REQUEST)


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if (serializer.is_valid()):
            user = serializer.save()
            return Response({
                'accessToken':  Token.objects.get(user=user).key,
                'user_id': user.pk,
                'email': user.email,
                'accountStatus': user.account_status,
                'name': user.name,
                'avatar': user.avatar
            }, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class ForgetEmailInputView(APIView):
    def post(self, request):
        serializer = ForgetEmailInputSerializer(data=request.data)
        if (serializer.is_valid()):
            email = serializer.validated_data['email']
            try:
                account = CustomUser.objects.get(email=email)
            except:
                return Response({"message": "Invalid email!"}, status=HTTP_400_BAD_REQUEST)

            token = default_token_generator.make_token(account)

            # Include the token in the email for password reset link

            reset_link = f"{settings.DOMAIN_NAME}/users/forget-password/{account.id}/{token}/"

            # Send the reset link to the user's email

            subject = 'Forget Your Password - with Noipun'
            users_folder_path = os.path.join(
                settings.BASE_DIR, 'users', 'templates')
            # key = generate_key()
            # ids = str(key[::-1])
            # Construct the path to the 'email.txt' file within the 'users' folder
            email_txt_path = os.path.join(
                users_folder_path, 'passwordChange.html')

            with open(email_txt_path) as file:
                email_content = file.read()

                email_content = email_content.replace(
                    '{{ name }}', account.name)
                email_content = email_content.replace(
                    '{{ activeLink }}', reset_link)

            email_from = settings.EMAIL_HOST_USER

            mail = EmailMessage(subject, email_content,
                                email_from, [account.email])
            mail.content_subtype = 'html'
            mail.send()

            return Response({'message': 'Password reset link sent successfully.'}, status=HTTP_200_OK)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


# class ForgetPasswordView(APIView):
#     def post(self, request, id, token, *args, **kwargs):
#         serializer = ForgetPasswordSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)

#         user = get_object_or_404(get_user_model(), id=id)

#         if not default_token_generator.check_token(user, token):
#             raise ValidationError('Invalid token')

#         serializer.save(user)

#         return Response({'message': 'Password successfully changed'}, status=HTTP_200_OK)

class ForgetPasswordView(View):
    template_name = 'forget.html'
    error_template_name = 'error_page.html'  # Create an error page template
    # Replace with your actual redirect URL
    success_redirect_url = 'http://localhost:5173/login'

    def get(self, request, id, token, *args, **kwargs):
        form = ForgetPasswordForm()
        user = get_object_or_404(get_user_model(), id=id)

        if not default_token_generator.check_token(user, token):
            return render(request, self.error_template_name, {'error_message': 'Invalid token or user'})

        return render(request, self.template_name, {'form': form, 'user_name': user.name})

    def post(self, request, id, token, *args, **kwargs):
        form = ForgetPasswordForm(request.POST)
        user = get_object_or_404(get_user_model(), id=id)

        if not default_token_generator.check_token(user, token):
            return render(request, self.template_name, {'form': form, 'error_message': 'Invalid token'})

        if form.is_valid():
            user.set_password(form.cleaned_data['password'])
            user.save()
            return redirect(self.success_redirect_url)

        return render(request, self.template_name, {'form': form, 'user_name': user.name})


# Password Change from user

# views.py
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView


# from .serializers import


class PasswordChangeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = PasswordChangeSerializer(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response({'detail': 'Password changed successfully.'}, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class EmailVerificationView(View):
    template_name = 'activation.html'

    def get(self, request, name, token, id, *args, **kwargs):
        context = {}
        try:
            tkn = Token.objects.filter(key=token).exists()
            if tkn:
                user = CustomUser.objects.get(id=id)
                if (user.is_verified):
                    context = {
                        'status': False,
                        "invalid": False
                    }
                else:
                    user.is_verified = True
                    user.save()
                    context = {
                        "name": user.name,
                        'status': True,
                        "invalid": False
                    }
            else:
                context = {
                    'status': False,
                    "invalid": True
                }
        except:
            context = {
                'status': False,
                "invalid": True
            }
        return render(request, self.template_name, context=context)
