from django import forms
from models import Torneo

class FormTorneo(forms.ModelForm):
	nombre = forms.CharField(required=True,max_length=100)

	class Meta:
		model = Torneo
		fields = ('nombre',)
