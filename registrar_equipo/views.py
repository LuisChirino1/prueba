from django.shortcuts import render
from django.views.generic import View
from forms import FormEquipo

class RegistrarEquipoView(View):
	def get(self, request, *args, **kwargs):
		form = FormEquipo()
		return render(request, 'registrar_equipo/registrar_equipo.html', locals())

	def post(self, request, *args, **kwargs):
		form = FormEquipo(request.POST)
		if form.is_valid():
			equipo = form.save()
			equipo.save()
			return render(request, 'index/index.html', locals())
		return render(request, 'index/index.html', locals())