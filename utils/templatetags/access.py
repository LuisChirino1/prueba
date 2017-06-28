from django.http import HttpResponseRedirect

# Define si tiene acceso controlando login y acceso por menu
def validar_session(f):

    def wrap(request, *args, **kwargs):

        if 'sessionUsuario' not in request.session:
            return HttpResponseRedirect('/login/')

        request.session.set_expiry(600)
        return f(request, *args, **kwargs)

    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap