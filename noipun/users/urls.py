from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import GetUsers


urlpatterns = [
    path('', GetUsers.as_view(), name='user'),
    path('login/',obtain_auth_token)
]
 