from rest_framework.viewsets import ModelViewSet
from .models import Proveedor
from .serializers import ProveedorSerializer


class ProveedorViewSet(ModelViewSet):
    queryset = Proveedor.objects.all().order_by('-fecha_registro')
    serializer_class = ProveedorSerializer