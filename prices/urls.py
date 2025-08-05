from django.urls import path
from . import views
app_name = "prices" 

urlpatterns = [
    path('', views.price_table, name='price_table'),
    path('api/prices/', views.prices_api, name='prices_api'),
    path("editor/", views.editor, name="editor"),
    
]