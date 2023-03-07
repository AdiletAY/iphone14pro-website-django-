from django.shortcuts import render
from .models import Colors

def home(request):
    colors = Colors.objects.all()
    context = {"colors" : colors}
    return render(request, 'base/home.html', context)

