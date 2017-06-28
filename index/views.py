# Create your views here.
from django.shortcuts import render
from django.views.generic import View


class IndexView(View):
    def post(self, request, *args, **kwargs):
    	return render(request, 'index/index.html', locals())