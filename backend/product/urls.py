from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("/product/bond/", get_bond_price, name='get_bond_price'),

]
