from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import GetUsers
from .views import Login,RegisterView


urlpatterns = [
    path('', GetUsers.as_view(), name='user'),
    path('login/',Login.as_view(),name='login'),
    path('registration/',RegisterView.as_view(),name='registration')
]
 