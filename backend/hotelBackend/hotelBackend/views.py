from django.http import HttpResponse

def home(request):
    return HttpResponse("Hotel Management Portal Ana Sayfa")
