
# RESTAURANT_CRUD

## Overview
A full-stack CRUD (Create, Read, Update, Delete) application for managing restaurant information. This project allows users to:
- Add new restaurants.
- View all restaurants in a table format.
- Fetch and view details of a specific restaurant by its ID.
- Update restaurant details.
- Delete restaurants from the database.

This project is built using:
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Features
1. **Add Restaurant**: Create a new restaurant with attributes like name, type, rating, location, and top items.
2. **View All Restaurants**: Display all restaurants in a table format with edit and delete options.
3. **Fetch Single Restaurant by ID**: Retrieve detailed information for a specific restaurant.
4. **Update Restaurant**: Modify restaurant details through an edit interface.
5. **Delete Restaurant**: Remove a restaurant from the database.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- MongoDB installed and running.
- Git installed for version control.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Chirag0341/RESTAURANT_CRUD.git
   ```
   Navigate into the project directory:
   ```bash
   cd RESTAURANT_CRUD
   ```

2. **Backend Setup**:
   Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
   Install dependencies:
   ```bash
   npm install
   ```
   Start the backend server:
   ```bash
   npm start
   ```

3. **Frontend Setup**:
   Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
   Install dependencies:
   ```bash
   npm install
   ```
   Start the React development server:
   ```bash
   npm start
   ```

4. **MongoDB Configuration**:
   - Ensure MongoDB is running locally or provide the connection string in the `.env` file in the backend folder:
     ```env
     MONGO_URI=mongodb://localhost:27017/restaurant_crud
     ```

---

## API Endpoints
The backend provides the following RESTful API endpoints:

### Restaurant Endpoints
1. **Create a Restaurant**:  
   `POST /api/create`  
   Body Example:
   ```json
   {
     "Name": "Pasta House",
     "Type": "Italian",
     "Rating": 4.5,
     "Location": "New York",
     "Top_food": ["Pasta", "Pizza"]
   }
   ```

2. **Fetch All Restaurants**:  
   `GET /api/getAll`

3. **Fetch Restaurant by ID**:  
   `GET /api/getOne/:id`

4. **Update Restaurant**:  
   `PUT /api/update/:id`  
   Body Example:
   ```json
   {
     "Rating": 4.8
   }
   ```

5. **Delete Restaurant**:  
   `DELETE /api/delete/:id`

---

## Folder Structure
```
RESTAURANT_CRUD/
│
├── backend/                # Backend application
│   ├── model/              # Mongoose schema for restaurants
│   ├── routes/             # API route definitions
│   ├── controller/         # Controller logic
│   └── server.js           # Entry point for the backend server
│
├── frontend/               # Frontend React application
│   ├── src/                
│       ├── components/     # React components
│       ├── App.js          # Main application entry
│       ├── index.js        # React DOM rendering
│   └── public/             # Static files
│
└── README.md               # Project documentation
```

---

## Screenshots
### 1. Main Page (All Restaurants,Get specific Restaurant) 
![Main Page Screenshot](screenshots/view_all_restaurants.png)

### 2. Add New Restaurant
![Fetch Single Restaurant Screenshot](screenshots/Add_Restaurant.png)

---

## Contributions
Feel free to fork this repository, raise issues, or submit pull requests.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
