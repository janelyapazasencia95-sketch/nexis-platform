from rest_framework.viewsets import ModelViewSet
from .models import Lote
from .serializers import LoteSerializer


class LoteViewSet(ModelViewSet):
    queryset = Lote.objects.select_related('compra', 'compra__proveedor').all().order_by('-id')
    serializer_class = LoteSerializer