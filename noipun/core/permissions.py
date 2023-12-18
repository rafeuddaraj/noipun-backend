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
        if request.method in ('GET', 'HEAD', 'OPTIONS'):
            return True

        return (
            request.user.is_authenticated
            and str(request.user.id) == view.kwargs.get('pk', '')
        )


class ReviewOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return bool(obj.user == request.user)
