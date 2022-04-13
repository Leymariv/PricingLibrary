from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('swap/', include('backend.swap.urls')),
    path('', include('frontend.urls')),
]
