from rest_framework.routers import DefaultRouter
from .views import CompraViewSet

router = DefaultRouter()
router.register('', CompraViewSet, basename='compras')

urlpatterns = router.urls