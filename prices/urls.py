from django.urls import path
from . import views

urlpatterns = [
    path('', views.price_table, name='price_table'),
    path('api/prices/', views.prices_api, name='prices_api'),
    
]