from django.urls import path
from accounts.views import CreateUserView

urlpatterns =[

    path('Register/',CreateUserView.as_view())
     
]