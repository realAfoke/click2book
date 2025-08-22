from google.oauth2 import service_account
from googleapiclient.discovery import build
from django.conf import settings
from datetime import timedelta
import os

class GoogleCalendarService:
    def __init__(self):
        self.credentials=service_account.Credentials.from_service_account_file(settings.GOOGLE_CALENDAR_CREDENTIALS,scopes=["https://www.googleapis.com/auth/calendar"])

        self .service=build('calendar','v3',credentials=self.credentials)

        self.calendar_id=settings.CALENDAR_ID
    
    def create_appointment_event(self,client_name,client_phone,appointment_time,duration,purpose):

        end_time=appointment_time + duration

        #create appointment
        event={
            'summary':f"Appointment: {client_name}",
            'description': f"Purpose: {purpose}\nClient Phone:{client_phone}",
            'start':{
                'dateTime':appointment_time.isoformat(),
                'timezone':'Africa/Lagos'
            },
            'end':{
                'dateTime':end_time.isoformat(),
                'timeZone':'Africa/Lagos'
            }
        }

        result=self.service.events().insert(calendarId=self.calendar_id,body=event).execute()
        return result


