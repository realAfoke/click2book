from django.shortcuts import render
from rest_framework import generics
from . model_serializer import ClientSerializer,AppointmentSerializer,BookingSerializer
from . models import Client,Consultants
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ListClient(generics.ListCreateAPIView):
    queryset=Client.objects.all()
    serializer_class=ClientSerializer


class AppointmentView(generics.ListCreateAPIView):
    queryset=Consultants.objects.all()
    serializer_class=AppointmentSerializer
    
    def list(self,request,*args,**kwargs):
        data=super().list(self,*args,**kwargs)
        print(data.data)
        return Response(data.data)

# class BookAppointmentView(APIView):
#     def post(self,request):
#         serializer=BookingSerializer(data=request.data)
#         if serializer.is_valid():
#             appointment=serializer.save()
#             return Response({'message':'Appointmenat succesfully'},status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class BookAppointmentView(generics.CreateAPIView):
    queryset=Consultants.objects.all()
    serializer_class=BookingSerializer

