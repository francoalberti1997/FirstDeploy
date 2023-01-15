from django.shortcuts import render, HttpResponse
from .forms import UsuarioForm
from django.http import JsonResponse


def index(request):
    if request.method == "POST":
        return HttpResponse("respuesta")

    contexto = {}
    return render(request, "index.html", contexto)


def endpoints(request):
    data = ['/advocates', 'advocates/:username',]
    return HttpResponse("Hola")