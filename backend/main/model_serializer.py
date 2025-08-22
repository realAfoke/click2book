from rest_framework import serializers
from . models import Consultants,Client
from . calendar_service import GoogleCalendarService


class ClientSerializer(serializers.ModelSerializer):
    class Meta():
        model=Client
        fields=['id','name','phone_number','email']

class AppointmentSerializer(serializers.ModelSerializer):
    owner=ClientSerializer()
    class Meta():
        model=Consultants
        fields=['id','service','purpose','status','consult_time','owner']

class BookingSerializer(serializers.Serializer):
    email=serializers.EmailField()
    phone_number=serializers.CharField(max_length=200)
    name=serializers.CharField(max_length=200)
    purpose=serializers.CharField()
    consult_time=serializers.DateTimeField()
    service=serializers.CharField(max_length=200)
    # duration=serializers.DurationField()


    def create(self, validated_data):
        print(validated_data)
        try:
            client,create=Client.objects.get_or_create(phone_number=validated_data.get('phone_number'),defaults={'email':validated_data['email'],'name':validated_data['name']})

            appointment_data={'service':validated_data['service'],'purpose':validated_data['purpose'],'consult_time':validated_data['consult_time'],'status':'booked','owner':client}
            appointment=Consultants.objects.create(**appointment_data)
           
        
            # Create Google Calendar Event
            # calender_service=GoogleCalendarService()
            # calendar_event=calender_service.create_appointment_event(
            #     client_name=client.name,client_phone=client.phone_number,appointment_time=validated_data['consult_time'],purpose=validated_data['purpose']
            #     )
            # print(f"✅ Calendar event created: {calendar_event.get('htmlLink')}")
            
            
            return {'email':client.email,'name':client.name,'phone_number':client.phone_number,'service':validated_data['service'],'purpose':appointment.purpose,'consult_time':appointment.consult_time}
        except Exception as e:
            raise serializers.ValidationError(f"Error creating appointment:{str(e)}")