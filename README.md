Restaurant Management System
Overview
This is a Restaurant Management System built with React for the frontend and Node.js/Express for the backend. It allows users to perform CRUD operations on restaurant data. Users can:

Add a new restaurant.
View all restaurants in a tabular format.
Fetch details of a specific restaurant by ID.
Update or delete restaurant information.
Features
View All Restaurants
Displays a list of all restaurants in a table with their name, type, rating, location, and top items.

Fetch Restaurant by ID
Users can input a restaurant's ID to fetch its details in a dedicated table with options to edit or delete.

Add New Restaurant
A form to add a new restaurant to the database.

Edit Restaurant
Update details for an existing restaurant.

Delete Restaurant
Remove a restaurant from the database.

Installation
Prerequisites
Ensure you have the following installed:

Node.js (v14+)
MongoDB
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/restaurant-management-system.git
cd restaurant-management-system
Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the backend directory.
Add the following variables:
env
Copy code
PORT=8000
MONGO_URI=your_mongodb_connection_string
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
API Endpoints
Backend Routes
Endpoint	Method	Description
/api/create	POST	Create a new restaurant
/api/getAll	GET	Fetch all restaurants
/api/getOne/:id	GET	Fetch a restaurant by ID
/api/update/:id	PUT	Update restaurant details by ID
/api/delete/:id	DELETE	Delete a restaurant by ID
File Structure
Backend
plaintext
Copy code
backend/
├── controllers/
│   └── restaurantController.js  # Controller logic for API endpoints
├── models/
│   └── restaurantModel.js       # Mongoose schema for restaurants
├── routes/
│   └── restaurantRoutes.js      # API route definitions
└── server.js                    # Entry point for the backend
Frontend
plaintext
Copy code
frontend/
├── src/
│   ├── components/
│   │   ├── GetRestaurant.jsx    # Component for displaying restaurants
│   │   ├── AddRestaurant.jsx    # Component for adding a restaurant
│   │   └── UpdateRestaurant.jsx # Component for updating a restaurant
│   ├── styles/
│   │   └── getrestaurant.css    # CSS for the GetRestaurant component
│   └── App.js                   # Main application file
└── package.json                 # Frontend dependencies
Usage
Viewing All Restaurants
Navigate to the homepage to view a table of all restaurants with their details.
Fetching a Restaurant by ID
Enter the ID of a restaurant in the input field under Get Restaurant Details.
Click Fetch Details to view its information in a table format.
Adding a New Restaurant
Click on the Add Restaurant button.
Fill out the form and click Submit to add a new restaurant.
Editing or Deleting a Restaurant
Use the ✏️ button to edit a restaurant's details.
Use the ❌ button to delete a restaurant.
Screenshots
1. View All Restaurants
<img src="screenshots/view_all_restaurants.png" alt="View All Restaurants" width="800"/>
2. Fetch Restaurant by ID
<img src="screenshots/fetch_restaurant_by_id.png" alt="Fetch Restaurant by ID" width="800"/>
Tech Stack
Frontend: React, Axios, CSS
Backend: Node.js, Express
Database: MongoDB