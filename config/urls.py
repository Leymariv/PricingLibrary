from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('product/', include('backend.product.urls')),
    path('', include('frontend.urls')),
]
