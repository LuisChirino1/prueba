import datetime
import locale

from django import template
from django.conf import settings
from django.core.urlresolvers import reverse


register = template.Library()

# ---------- Ver la informacion del pie de pagina ----------

# ---------- tags para locate local ----------
#@register.simple_tag
#def info_fecha():
#    now = datetime.datetime.now()
#    locale.setlocale(locale.LC_ALL, 'esp')
#    cadena = now.strftime("%A %d de %B de %Y - %I:%M %p")
#    cadenaParse = unicode(cadena, "latin-1")
#    return '%s' % (cadenaParse)

# ---------- tags para locate de desarrollo ----------
@register.simple_tag
def info_fecha():
    now = datetime.datetime.now()
    locale.setlocale(locale.LC_ALL, 'es_VE.utf8')
    cadena = now.strftime("%A %d de %B de %Y - %I:%M %p")
    return '%s' % cadena

# ---------- Referencias de la libreria static ----------

@register.simple_tag
def css_tag(css):
    return '%s%s%s' % (settings.STATIC_URL, 'css/', css)


@register.simple_tag
def js_tag(js):
    return '%s%s%s' % (settings.STATIC_URL, 'js/', js)


@register.inclusion_tag('img.html')
def image_tag(img, ancho, alto, ):
    return {'imagen': '%s%s%s' % (settings.STATIC_URL, 'img/', img),
            'ancho': '%s%s' % ('', ancho),
            'alto': '%s%s' % ('', alto)}


@register.inclusion_tag('imgMenu.html')
def image_tag_menu(id, clas, img, alt, ancho, alto):
    return {'id': '%s%s' % ('', id),
            'clas': '%s%s' % ('', clas),
            'imagen': '%s%s%s' % (settings.STATIC_URL, 'img/', img),
            'alt': '%s%s' % ('', alt),
            'ancho': '%s%s' % ('', ancho),
            'alto': '%s%s' % ('', alto)}

# ---------- Link a cadenas o imagenes ----------
@register.simple_tag
def template_tag(templateTags):
    return '%s%s' % (settings.AUTOLOAD_TEMPLATETAGS, templateTags)


@register.inclusion_tag('js_img.html')
def js_img_tag(js, img):
    js = '%s' % (js)
    imagen = '%s%s%s' % (settings.STATIC_URL, 'img/', img)
    return {'js': js, 'imagen': imagen}


@register.inclusion_tag('url.html')
def url_tag(title, link):
    link_to = reverse(link) # Del nombre del link se obtiene la url
    return {'title': title, 'link_to': link_to, }


@register.inclusion_tag('url_img.html')
def url_img_tag(img, link):
    imagen = '%s%s%s' % (settings.STATIC_URL, 'img/', img)
    link_to = reverse(link) # Del nombre del link se obtiene la url
    return {'imagen': imagen, 'link_to': link_to, }


@register.inclusion_tag('url_button.html')
def url_button(title, link):
    link_to = reverse(link) # Del nombre del link se obtiene la url
    return {'title': title, 'link_to': link_to, }

# ---------- Aplica un filtro en los campos de fecha ----------

@register.filter
def filtro_fecha(fecha):
    return fecha.strftime("%d/%m/%Y - %H:%M")
    # Modo de llamado {{ alguna_variable_a_filtrar|filtro_fecha }}