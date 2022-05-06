import numpy as np
import datetime as dt
from utils.maths.proba import *

class Product():
    # methodes d'actualisation
    # prix future
    """
    taux => valeur auj
    """
    
    @staticmethod
    def actualize(value, rate, n=1):
        return value / (1 + rate) ** n


class Bond(Product):
    def __init__(self, coupon_rate, discount_rate, maturity_date, face_value, coupon_period):
        """
        C: coupon_rate
        F: face_value
        t: coupon_period
        T: maturity_date
        """
        self.coupon_rate = coupon_rate
        self.discount_rate = discount_rate
        self.maturity_date = maturity_date
        self.face_value = face_value
        self.coupon_period = coupon_period

    def value_coupons(self):
        coupon_payment = self.coupon_rate * self.face_value
        value = sum(self.actualize(coupon_payment, self.discount_rate, self.coupon_period) for i in range(self.maturity_date * self.coupon_period))            
        return value 
        
    def v_face_value(self):
        return self.actualize(self.face_value, self.discount_rate, self.maturity_date)

class Swap(Product):
    pass
 

class Option(Product):
    
    @staticmethod
    def calcul_d1(spot_price, strike_price, risk_free_rate, sigma, time_to_maturity):
        return np.log(spot_price/strike_price) + (risk_free_rate + sigma**2/2) * time_to_maturity

    @staticmethod
    def calcul_d2(d1, sigma, time_to_maturity):
        return d1 - sigma * np.sqrt(time_to_maturity)
    
    def black_and_scholes(self, spot_price, strike_price, risk_free_rate, time_to_maturity, sigma):
        """
        C: call option price
        normal_dist: CFD of the normal distribution
        St = spot_price: Spot price of an asset
        K = strike_price: strike price
        r = risk_free_rate: risk free rate
        T = time_to_maturity: time to maturity
        sigma: volatility of the asset
        """
        try:
            d1 = self.calcul_d1(spot_price, strike_price, risk_free_rate, sigma, time_to_maturity)
            d2 = self.calcul_d2(d1, sigma, time_to_maturity)
            option_price = normal_dist(d1) * spot_price - normal_dist(d2) * strike_price * np.exp(-risk_free_rate * time_to_maturity)
            return option_price
        except Exception as e:
            print('Error at: black_and_scholes')
            return np.nan

