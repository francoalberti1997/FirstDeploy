from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Usuario(models.Model):
    nombre_usuario = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return(self.nombre_usuario)