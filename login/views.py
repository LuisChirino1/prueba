# Create your views here.
from django.shortcuts import render
from django.views.generic import View

#def login(request):
#    return render_to_response('login/login.html', locals(), context_instance = RequestContext(request))


class LoginView(View):
    def get(self, request, *args, **kwargs):
		return render(request, 'login/login.html', locals())
