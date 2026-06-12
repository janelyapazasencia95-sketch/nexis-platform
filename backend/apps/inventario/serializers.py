from rest_framework import serializers
from .models import Lote


class LoteSerializer(serializers.ModelSerializer):
    proveedor_nombre = serializers.CharField(source='compra.proveedor.nombre', read_only=True)

    class Meta:
        model = Lote
        fields = '__all__'