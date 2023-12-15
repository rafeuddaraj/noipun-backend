from core.models import CustomUser
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK
from core.permissions import Private
from rest_framework.response import Response
from .serializers import UserSerializer
# Create your views here.


class GetUsers(APIView):
    permission_classes = [Private]
    def get(self, request, *args, **kwargs):
        users = CustomUser.objects.all()
        serializer = UserSerializer(instance=users, many=True)
        return Response(serializer.data)
