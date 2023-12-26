from rest_framework.permissions import BasePermission, SAFE_METHODS


class AdminOrReadOnly (BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff and request.user.is_superuser)


class Private(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff and request.user.is_superuser)


class SellerOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if (request.method in SAFE_METHODS):
            return True
        try:
            # Check if the user is authenticated and is a seller
            return request.user.is_authenticated and request.user.account_status == 'seller'
        except AttributeError:
            # Handle the case where the user is anonymous or does not have account_status
            return True

# class SellerOrReadOnly(BasePermission):
#     def has_permission(self, request, view):
#         if request.method in SAFE_METHODS:
#             # Allow read-only access for any request
#             return True
#         return request.user and request.user.account_status == 'seller'


class ReviewOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        # Allow GET, HEAD, and OPTIONS requests for all users
        if request.method in SAFE_METHODS:
            return True

        # Check if the user is a seller for other methods (POST, PUT, DELETE)
        return request.user and request.user.account_status == 'seller'
