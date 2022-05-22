from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def home(request):
    return render(request, 'authentication/home.html')

def signup(request):
    if request.method == "POST":
        firstname = request.POST.get("firstname")
        lastname = request.POST.get("lastname")
        email = request.POST.get("email")
        username = request.POST.get("username")
        password = request.POST.get("password")
        c_password = request.POST.get("c_password")

        myUser = User.objects.create_user(username, email, password)
        myUser.first_name = firstname
        myUser.last_name = lastname

        myUser.save()

        messages.success(request, "Your account has been successfully created!")

        return redirect('signin')


    return render(request, 'authentication/signup.html')

def signin(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            
            firstname = user.first_name

            return render(request, "authentication/home.html", {"firstname": firstname})
        else: 
            messages.error(request, "Bad credentials!")
    return render(request, 'authentication/signin.html')

def signout(request):
    logout(request)
    messages.success(request, "Logged out successfully!")
    return redirect("home")