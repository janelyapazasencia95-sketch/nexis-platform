from django.db import models
from apps.proveedores.models import Proveedor


class Compra(models.Model):
    ESTADO_PAGO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('programado', 'Programado'),
        ('pagado', 'Pagado'),
        ('fallido', 'Fallido'),
        ('anulado', 'Anulado'),
    ]

    ESTADO_EVALUACION_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('en_evaluacion', 'En evaluación'),
        ('evaluada', 'Evaluada'),
        ('observada', 'Observada'),
    ]

    codigo = models.CharField(max_length=30, unique=True)
    fecha_compra = models.DateField()
    proveedor = models.ForeignKey(Proveedor, on_delete=models.PROTECT, related_name='compras')

    departamento = models.CharField(max_length=80)
    provincia = models.CharField(max_length=80)
    distrito = models.CharField(max_length=80)

    cantidad_kg = models.DecimalField(max_digits=10, decimal_places=2)
    precio_kg = models.DecimalField(max_digits=10, decimal_places=2)
    total_pagado = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)

    metodo_pago = models.CharField(max_length=80, blank=True, null=True)
    estado_pago = models.CharField(max_length=20, choices=ESTADO_PAGO_CHOICES, default='pendiente')
    estado_evaluacion = models.CharField(max_length=20, choices=ESTADO_EVALUACION_CHOICES, default='pendiente')

    comprobante = models.FileField(upload_to='comprobantes/', blank=True, null=True)
    observaciones = models.TextField(blank=True, null=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.total_pagado = self.cantidad_kg * self.precio_kg
        super().save(*args, **kwargs)

    def __str__(self):
        return self.codigo