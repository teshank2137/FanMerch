
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('product/', include('products.urls')),
    path('order/', include('orders.urls')),
    path('accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
#  add static route
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
