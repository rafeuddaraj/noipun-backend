from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import Login,RegisterView,Logout,GetUsers


urlpatterns = [
    path('', GetUsers.as_view(), name='user'),
    path('login/',Login.as_view(),name='login'),
    path('logout/',Logout.as_view(),name='logout'),
    path('registration/',RegisterView.as_view(),name='registration')
]
 