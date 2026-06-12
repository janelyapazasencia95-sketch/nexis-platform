from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static


def estado_api(request):
    return JsonResponse({
        "sistema": "NEXIS",
        "estado": "API activa",
        "version": "1.0.0"
    })


urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/estado/', estado_api),

    path('api/proveedores/', include('apps.proveedores.urls')),
    path('api/compras/', include('apps.compras.urls')),
    path('api/lotes/', include('apps.inventario.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)