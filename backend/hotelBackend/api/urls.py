from django.urls import path
from .views import LoginView, menu_list,home
from django.http import HttpResponseRedirect
urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("menu/", menu_list, name="menu"),
 #   path('', home, name='home'),
    path('', lambda request: HttpResponseRedirect('/admin/')),
]
