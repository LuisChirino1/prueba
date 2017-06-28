from django import forms
from models import Equipo
from registrar_torneo.models import Torneo

class FormEquipo(forms.ModelForm):
	nombre = forms.CharField(required=True,max_length=100)
	encargado = forms.CharField(required=True,max_length=100)
	torneo = forms.ModelChoiceField(Torneo.objects.all())

	class Meta:
		model = Equipo
