import requests
from django.core.cache import cache
from django.http import JsonResponse
from django.shortcuts import render
import logging
from .utils import fetch_specific_car_prices
def prices_api(request):

    data = cache.get('latest_prices')
    if not data:
        try:
            # واکشی هم‌زمان یا جداگانه
            crypto = fetch_crypto()
            fiat   = fetch_fiat()
            coin   = fetch_coins()
            metal  = fetch_metals()
            cars = fetch_specific_car_prices()
            data = {
                'crypto': crypto,
                'fiat':   fiat,
                'coin':   coin,
                'metal':  metal,
                'cars': cars
            }
            cache.set('latest_prices', data, timeout=30)
        except requests.RequestException as e:
            # اگر API بیرونی خطا داد
            return JsonResponse({'error': 'خطا در واکشی داده‌ها', 'details': str(e)}, status=502)
        except Exception as e:
            # هر خطای دیگری
            return JsonResponse({'error': 'خطای داخلی سرور', 'details': str(e)}, status=500)

    return JsonResponse(data)


def price_table(request):
    return render(request, 'prices/table.html')


# تابع‌های کمکی واکشی از API

def fetch_crypto():
    url = 'https://api.coingecko.com/api/v3/simple/price'
    params = {'ids': 'bitcoin,ethereum,tether', 'vs_currencies': 'usd'}
    resp = requests.get(url, params=params, timeout=5)
    resp.raise_for_status()
    js = resp.json()
    return [
        {'name': 'Bitcoin',  'price': js.get('bitcoin',{}).get('usd')},
        {'name': 'Ethereum', 'price': js.get('ethereum',{}).get('usd')},
        {'name': 'Tether',   'price': js.get('tether',{}).get('usd')},
    ]

def fetch_fiat():
    """
    واکشی لحظه‌ای نرخ USD, EUR و AED و تبدیل همه به ریال ایران
    با استفاده از open.er-api.com (بدون نیاز به API Key).
    """
    url = 'https://open.er-api.com/v6/latest/USD'
    resp = requests.get(url, timeout=5)
    resp.raise_for_status()
    data = resp.json()
    rates = data.get('rates', {})

    # نرخ یک دلار به ریال
    usd_to_irr = rates.get('IRR', 0)
    # نرخ یورو به ریال
    eur_to_irr = rates.get('EUR', 0) * usd_to_irr
    # نرخ درهم به ریال
    aed_to_irr = rates.get('AED', 0) * usd_to_irr

    return [
        {'name': 'USD', 'price': usd_to_irr},
        {'name': 'EUR', 'price': eur_to_irr},
        {'name': 'AED', 'price': aed_to_irr},
    ]
def fetch_coins():
    # مثال ثابت؛ این‌جا می‌توانی API TGJU را صدا بزنی
    return [
        {'name': 'سکه تمام بهار آزادی', 'price': 14000000},
        {'name': 'نیم‌سکه',             'price':  7200000},
        {'name': 'ربع‌سکه',            'price':  3800000},
        {'name': 'سکه گرمی',           'price':  2000000},
    ]

def fetch_metals():
    # مثال ثابت یا API TGJU
    return [
        {'name': 'طلای 18 عیار (مثقال)', 'price': 5500000},
        {'name': 'نقره (گرم)',           'price':   65000},
    ]
def prices_api(request):
    data = cache.get('latest_prices')
    if not data:
        # واکشی سایر بخش‌ها…
        cars = fetch_specific_car_prices()
        data = {
            # crypto, fiat, …,
            'cars': cars,
        }
        cache.set('latest_prices', data, timeout=30)
    return JsonResponse(data)