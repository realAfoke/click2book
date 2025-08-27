Click2Book - Professional Appointment Booking System
A full-stack web application designed for legal consultation scheduling with automated calendar integration. Built to streamline the appointment booking process for law firms and their clients.
🚀 Features

Client Self-Booking: Intuitive interface for clients to schedule their own appointments
Admin Dashboard: Comprehensive management panel with search and filtering capabilities
Google Calendar Integration: Real-time synchronization with Google Calendar
Dual Booking System: Both clients and admin staff can create appointments
Appointment Management: View, search, and manage all appointments from admin panel
Responsive Design: Works seamlessly on desktop and mobile devices
Real-time Updates: Appointments instantly appear in connected Google Calendar

🛠️ Tech Stack
Backend:

Django & Django REST Framework
PostgreSQL Database
Google Calendar API
Python 3.x

Frontend:

React.js
Tailwind CSS

<!-- Axios for API calls -->

React Router for navigation

Integrations:

Google Calendar API for real-time calendar sync
SMS/Voice notifications planned (Twilio integration ready but not implemented due to regional limitations)

⚡ Quick Start
Prerequisites

Python 3.8+
Node.js 14+
PostgreSQL
Google Calendar API credentials

Installation

Clone the repository

bashgit clone https://github.com/yourusername/click2book.git
cd click2book

Backend Setup

bashcd backend
python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip install -r requirements.txt

Environment Variables
Create a .env file in the root directory:

GOOGLE_CALENDAR_CREDENTIALS=path/to/your/google-credentials.json
CALENDAR_ID=your-google-calendar-id
DATABASE_URL=your-postgresql-url

Database Migration

bashpython manage.py migrate
python manage.py createsuperuser

Frontend Setup

bashcd ../frontend
npm install

Run the Application

bash# Backend (from backend directory)
python manage.py runserver

# Frontend (from frontend directory)

npm start
Visit http://localhost:3000 to access the application.
📱 Usage
For Clients:

Navigate to the booking page
Fill in personal details and appointment preferences
Select desired date and time
Submit booking request
Receive confirmation and calendar invite

For Admin/Staff:

Access admin dashboard at /admin
View all appointments with search functionality
Create appointments on behalf of clients during phone calls
Manage appointment statuses and details
Monitor real-time calendar integration

🔧 API Endpoints

POST /api/book/ - Create new appointment
GET /api/appointments/ - List all appointments
GET /api/clients/ - List all clients
POST /api/clients/ - Create new client

🎯 Key Technical Achievements

External API Integration: Successfully integrated Google Calendar API for real-time scheduling
Full-Stack Architecture: Seamless communication between Django backend and React frontend
Database Design: Efficient relational database structure with proper foreign key relationships
User Experience: Intuitive interface design supporting both self-service and assisted booking
Error Handling: Comprehensive error management and user feedback systems

📈 Future Enhancements

SMS/Voice reminder system (Twilio integration prepared)
Email notification system
Advanced reporting and analytics
Payment integration for consultation fees
Calendar conflict detection

🤝 Contributing
This is a portfolio project, but feedback and suggestions are welcome! Feel free to open issues or submit pull requests.
📄 License
This project is open source and available under the MIT License.
📞 Contact
Your Name Igho Afoke Reality
Email: ighoafokereality3@gmail.com
LinkedIn: https://www.linkedin.com/in/afoke-reality-igho
x/twitter:https://x.com/dry_commit
live url:https://click2book.netlify.app/
