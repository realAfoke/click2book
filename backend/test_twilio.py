# from twilio.rest import Client


# def test_voice_call():
#     try:
#         client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        
#         call = client.calls.create(
#             twiml='<Response><Say>Hello! This is a test call from your appointment system. You have an appointment reminder. Press 1 to confirm your appointment.</Say></Response>',
#             to='+2349123168282',
#             from_='+13607437558'
#         )
        
#         print(f"✅ Voice call initiated successfully!")
#         print(f"Call SID: {call.sid}")
#         print(f"Status: {call.status}")
        
#     except Exception as e:
#         print(f"❌ Error: {e}")

# if __name__ == "__main__":
#     test_voice_call()


