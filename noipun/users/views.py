from core.models import CustomUser
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_400_BAD_REQUEST
from core.permissions import Private
from rest_framework.response import Response
from .serializers import UserSerializer,RegisterSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from . import signals

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
            'name':user.name,
            'avatar':user.avatar
        },status=HTTP_200_OK)

class Logout(APIView):
    def post(self, request, *args, **kwargs):
        print(request.user)
        if(request.user.auth_token):
            request.user.auth_token.delete()
            return Response({'message':"Logout successful"},status=HTTP_200_OK)
        return Response({"There was a error!"},status=HTTP_400_BAD_REQUEST)
            


class RegisterView(APIView):
    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if(serializer.is_valid()):
            user = serializer.save()
            return Response({
                'accessToken':Token.objects.get(user=user).key,
                'email':user.email,
                'name':user.name,
                'accountStatus':user.account_status,
                'isVerified':user.is_verified
            },status=HTTP_201_CREATED)
        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)