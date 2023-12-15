from core.models import CustomUser
from rest_framework.serializers import ModelSerializer

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ('password',)
        
