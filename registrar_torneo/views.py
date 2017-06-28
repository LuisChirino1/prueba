from django.shortcuts import render
from django.views.generic import View
from forms import FormTorneo

class RegistrarTorneoView(View):
	def get(self, request, *args, **kwargs):
		form = FormTorneo()
		return render(request, 'registrar_torneo/registrar_torneo.html', locals())

	def post(self, request, *args, **kwargs):
		form = FormTorneo(request.POST)
		if form.is_valid():
			torneo = form.save()
			torneo.save()
			return render(request, 'index/index.html', locals())
		return render(request, 'index/index.html', locals())