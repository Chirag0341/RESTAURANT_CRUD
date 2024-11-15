import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./getrestaurant.css";
import { Link } from "react-router-dom";

const Getrestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantId, setRestaurantId] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAll");
      setRestaurants(response.data);
    };

    fetchData();
  }, []);

  const deleteRestaurant = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((response) => {
        setRestaurants((prev) => prev.filter((restaurant) => restaurant._id !== id));
        if (selectedRestaurant && selectedRestaurant._id === id) {
          setSelectedRestaurant(null); // Clear the selected restaurant if deleted
        }
        toast.success(response.data.msg=("Deleted succesfully"), { position: "top-right" });
      })
      .catch((error) => console.log(error));
  };

  const getOneRestaurant = async () => {
    if (!restaurantId) {
      toast.error("Please enter a restaurant ID", { position: "top-right" });
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8000/api/getOne/${restaurantId}`);
      setSelectedRestaurant(response.data);
      toast.success("Restaurant details fetched successfully!", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch restaurant details", { position: "top-right" });
    }
  };

  return (
    <div>
      <h2>RESTAURANTS</h2>
      <div className="restaurantTable">
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr className="tableheading">
              <th>S.No.</th>
              <th>Restaurant Name</th>
              <th>Type</th>
              <th>Rating</th>
              <th>Location</th>
              <th>Top Items</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant, index) => (
              <tr key={restaurant._id}>
                <td>{index + 1}</td>
                <td>{restaurant.Name}</td>
                <td>{restaurant.Type}</td>
                <td>{restaurant.Rating}</td>
                <td>{restaurant.Location}</td>
                <td>{restaurant.Top_food}</td>
                <td className="actionButtons">
                  <Link to={`/update/${restaurant._id}`} className="editButton">
                    ✏️
                  </Link>
                  <button
                    onClick={() => deleteRestaurant(restaurant._id)}
                    className="deleteButton"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={"/add"} className="addButton">
        Add Restaurant
      </Link>

      <div className="getOneSection">
        <h2>Get Restaurant Details</h2>
        <input
          type="text"
          placeholder="Enter Restaurant ID"
          value={restaurantId}
          onChange={(e) => setRestaurantId(e.target.value)}
        />
        <button onClick={getOneRestaurant} className="fetchButton">
          Fetch Details
        </button>

        {selectedRestaurant && (
          <div className="restaurantDetails">
            <h4>Fetched Restaurant Details:</h4>
            <table border={1} cellPadding={10} cellSpacing={0}>
              <thead>
                <tr className="tableheading">
                  <th>Restaurant Name</th>
                  <th>Type</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Top Items</th>
                  <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedRestaurant.Name}</td>
                  <td>{selectedRestaurant.Type}</td>
                  <td>{selectedRestaurant.Rating}</td>
                  <td>{selectedRestaurant.Location}</td>
                  <td>{selectedRestaurant.Top_food}</td>
                  <td className="actionButtons">
                    <Link to={`/update/${selectedRestaurant._id}`} className="editButton">
                      ✏️
                    </Link>
                    <button
                      onClick={() => deleteRestaurant(selectedRestaurant._id)}
                      className="deleteButton"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Getrestaurant;
