from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import Login,RegisterView,Logout,GetUsers,SellerRegistrationView,SellerLogin,ForgetEmailInputView,ForgetPasswordView,EmailVerificationView,PasswordChangeView


urlpatterns = [
    path('', GetUsers.as_view(), name='user'),
    path('login/',Login.as_view(),name='login'),
    path('seller-login/',SellerLogin.as_view(),name='seller-login'),
    path('logout/',Logout.as_view(),name='logout'),
    path('registration/',RegisterView.as_view(),name='registration'),
    path('forget-email-input/',ForgetEmailInputView.as_view(),name='email-input'),
    path('forget-password/<int:id>/<str:token>/',ForgetPasswordView.as_view(),name='forget'),
    path('email-verification/<str:name>/<int:id>/<str:token>/',EmailVerificationView.as_view(),name='email-verification'),
    path('seller-registration/',SellerRegistrationView.as_view(),name='seller-registration'),
    path('change-password/',PasswordChangeView.as_view(),name='change-password'),
]
 