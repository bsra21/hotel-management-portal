# Hotel Management Portal

This project is a **Hotel Management Portal**.  
It allows administrators to manage **menu, food categories, customers, staff, orders, bookings, billing, and feedback**.  
Customers can view the menu, place orders, and leave feedback via the frontend.

---

## 🚀 Features

- JWT-based user login & authorization
- Menu and food category management
- Customer and staff management
- Order management with automatic billing
- Feedback management
- Admin panel to manage all operations

---

## 📂 Project Structure
# Hotel Management Portal

This project is a **Hotel Management Portal**.  
It allows administrators to manage **menu, food categories, customers, staff, orders, bookings, billing, and feedback**.  
Customers can view the menu, place orders, and leave feedback via the frontend.

---

## 🚀 Features

- JWT-based user login & authorization
- Menu and food category management
- Customer and staff management
- Order management with automatic billing
- Feedback management
- Admin panel to manage all operations

---

## 📂 Project Structure

backend/ # Django backend
hotelBackend/
api/ # Django app (models, views, serializers, urls)
hotelBackend/ # Django project settings and urls
frontend/ # React frontend
src/
components/ # Navbar, Menu, Login etc.
App.jsx


---

## 💻 Installation

### Backend

1. Create a Python virtual environment:

```bash
cd backend/hotelBackend
python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
2. Install dependencies:

pip install -r requirements.txt


3.Run database migrations:

python manage.py makemigrations
python manage.py migrate


4.Create a superuser:

python manage.py createsuperuser


5.Run the development server:

python manage.py runserver

Backend URL: http://127.0.0.1:8000/

