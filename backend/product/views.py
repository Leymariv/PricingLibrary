from django.shortcuts import render
from .product import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def get_bond_price(request):
    coupon_rate, discount_rate, maturity_date, face_value, n_periods = request.data
    
    bond_obj = Bond(coupon_rate, discount_rate, maturity_date, face_value, n_periods)
    value = bond_obj.value_coupons() + bond_obj.v_face_value()
    
    return Response({'value': value})