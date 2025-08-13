from django.urls import path
from . import views

urlpatterns=[
    path('client/',views.ListClient.as_view(),name='client-view'),
    path('appointment/',views.AppointmentView.as_view(),name='appointment-view'),
    path('book-appointment/',views.BookAppointmentView.as_view(),name='book-appointment'),
]