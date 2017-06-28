from django.conf.urls import patterns, include, url
from views import RegistrarTorneoView
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sgfs.views.home', name='home'),
    # url(r'^sgfs/', include('sgfs.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

	url(r'^registrar_torneo/$', RegistrarTorneoView.as_view(), name='registrar_torneo'),
)
