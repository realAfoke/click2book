from google.oauth2 import service_account
from googleapiclient.discovery import build
from django.conf import settings
from datetime import timedelta
import json
import os

class GoogleCalendarService:
    scopes=["https://www.googleapis.com/auth/calendar"]
    def __init__(self):
       
        creds_value = settings.GOOGLE_CALENDAR_CREDENTIALS

        # If it looks like JSON string → parse
        if isinstance(creds_value, str):
            creds_dict = json.loads(creds_value)
            self.credentials = service_account.Credentials.from_service_account_info(
                creds_dict, scopes=self.scopes
            )
        elif isinstance(creds_value, dict):
            # If Django already parsed env to dict (rare but possible)
            self.credentials = service_account.Credentials.from_service_account_info(
                creds_value, scopes=self.scopes
            )
        else:
            raise ValueError("Invalid GOOGLE_CALENDAR_CREDENTIALS format")

        self .service=build('calendar','v3',credentials=self.credentials)

        self.calendar_id=settings.CALENDAR_ID
    
    def create_appointment_event(self,client_name,client_phone,appointment_time,purpose):

        end_time=appointment_time + timedelta(hours=1)

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


