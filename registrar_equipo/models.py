# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#     * Rearrange models' order
#     * Make sure each model has one field with primary_key=True
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.
from __future__ import unicode_literals

from django.db import models
from registrar_torneo.models import Torneo

# Create your models here.
class Equipo(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50, blank=True)
    torneo = models.ForeignKey(Torneo, db_column='torneo', blank=True, null=True)
    encargado = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = 'equipo'