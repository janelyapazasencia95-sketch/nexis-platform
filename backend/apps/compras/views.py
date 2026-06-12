from rest_framework.viewsets import ModelViewSet
from .models import Compra
from .serializers import CompraSerializer


class CompraViewSet(ModelViewSet):
    queryset = Compra.objects.select_related('proveedor').all().order_by('-fecha_registro')
    serializer_class = CompraSerializer