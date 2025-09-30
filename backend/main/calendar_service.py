from google.oauth2 import service_account
from googleapiclient.discovery import build
from django.conf import settings
from datetime import timedelta
import os
import json

class GoogleCalendarService:
    scopes=["https://www.googleapis.com/auth/calendar"]
    creds_value=settings.GOOGLE_CALENDAR_CREDENTIALS
    def __init__(self):
        # if os.path.isfile(self.creds_value):
        #     self.credentials=service_account.Credentials.from_service_account_file(self.creds_value,scopes=self.scopes)
        # else:
        #     cred_dict=json.loads(self.creds_value)
        #     if "private_key" in cred_dict:
        #         cred_dict['private_key']=cred_dict['private_key'].replace('\\n','\n')
        #     self.credentials=service_account.Credentials.from_service_account_info(cred_dict,scopes=self.scopes)
        if isinstance(self.creds_value, dict):
            # Already parsed dict (Railway prod case)
            cred_dict = self.creds_value
        else:
            # String case (dev file path or JSON string)
            if os.path.isfile(self.creds_value):
                self.credentials = service_account.Credentials.from_service_account_file(
                    self.creds_value, scopes=self.scopes
                )
                self.service = build("calendar", "v3", credentials=self.credentials)
                self.calendar_id = settings.CALENDAR_ID
                return
            else:
                cred_dict = json.loads(self.creds_value)

        if "private_key" in cred_dict:
            cred_dict["private_key"] = cred_dict["private_key"].replace("\\n", "\n")

        self.credentials = service_account.Credentials.from_service_account_info(
            cred_dict, scopes=self.scopes
        )
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


