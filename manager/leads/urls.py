#KYIV MEDIA 09.12.2019
from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/leads',LeadViewSet, 'leads')

urlpatterns=router.urls