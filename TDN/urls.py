from django.conf.urls import url
from TDN import views

app_name = 'TDN'
urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^test', views.test, name='test')
]

