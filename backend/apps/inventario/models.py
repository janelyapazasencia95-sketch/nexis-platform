from django.db import models
from apps.compras.models import Compra


class Lote(models.Model):
    CALIDAD_CHOICES = [
        ('premium', 'Premium'),
        ('primera', 'Primera'),
        ('segunda', 'Segunda'),
        ('rechazada', 'Rechazada'),
    ]

    ESTADO_CHOICES = [
        ('disponible', 'Disponible'),
        ('reservado', 'Reservado'),
        ('en_proceso', 'En proceso'),
        ('vendido', 'Vendido'),
        ('exportado', 'Exportado'),
        ('observado', 'Observado'),
    ]

    codigo = models.CharField(max_length=30, unique=True)
    compra = models.ForeignKey(Compra, on_delete=models.PROTECT, related_name='lotes')

    cantidad_kg = models.DecimalField(max_digits=10, decimal_places=2)
    calidad = models.CharField(max_length=20, choices=CALIDAD_CHOICES, default='primera')

    almacen = models.CharField(max_length=80, blank=True, null=True)
    zona = models.CharField(max_length=50, blank=True, null=True)
    estante = models.CharField(max_length=50, blank=True, null=True)

    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='disponible')
    fecha_ingreso = models.DateField(blank=True, null=True)
    observaciones = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.codigo