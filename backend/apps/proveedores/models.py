from django.db import models


class Proveedor(models.Model):
    TIPO_CHOICES = [
        ('productor', 'Productor'),
        ('asociacion', 'Asociación'),
        ('comunidad', 'Comunidad'),
    ]

    ESTADO_CHOICES = [
        ('activo', 'Activo'),
        ('inactivo', 'Inactivo'),
        ('observado', 'Observado'),
    ]

    nombre = models.CharField(max_length=150)
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES)
    documento = models.CharField(max_length=20, unique=True)
    representante = models.CharField(max_length=150, blank=True, null=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    correo = models.EmailField(blank=True, null=True)

    departamento = models.CharField(max_length=80)
    provincia = models.CharField(max_length=80)
    distrito = models.CharField(max_length=80)
    direccion = models.CharField(max_length=200, blank=True, null=True)

    latitud = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    longitud = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)

    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='activo')
    observaciones = models.TextField(blank=True, null=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre