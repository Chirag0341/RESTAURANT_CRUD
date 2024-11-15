import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../addrestaurant/Add";
import toast from "react-hot-toast";

const Edit = () => {
  const initialRestaurant = {
    name: "",
    type: "",
    location: "",
    rating: "",
    top_food: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
    console.log(restaurant);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getOne/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, restaurant)
      .then((response) => {
        toast.success(response.data.msg=("Updated successfully"), { position: "top-right" });
        navigate("/"); // Redirect to home page or restaurant list page after successful update
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addRestaurant">
      <h2>Update Restaurant</h2>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="Name">Restaurant Name</label>
          <input
            type="text"
            value={restaurant.Name}
            onChange={inputChangeHandler}
            id="Name"
            name="Name"
            autoComplete="off"
            placeholder="Restaurant Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Type">Restaurant Type</label>
          <input
            type="text"
            value={restaurant.Type}
            onChange={inputChangeHandler}
            id="Type"
            name="Type"
            autoComplete="off"
            placeholder="Restaurant Type"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            value={restaurant.Location}
            onChange={inputChangeHandler}
            id="Location"
            name="Location"
            autoComplete="off"
            placeholder="Location"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Rating">Rating</label>
          <input
            type="Number"
            value={restaurant.Rating}
            onChange={inputChangeHandler}
            id="Rating"
            name="Rating"
            autoComplete="off"
            placeholder="Rating"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Top_food">Top Food</label>
          <input
            type="text"
            value={restaurant.Top_food}
            onChange={inputChangeHandler}
            id="Top_food"
            name="Top_food"
            autoComplete="off"
            placeholder="Top Food"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE RESTAURANT</button>
        </div>
        <div class='button-container'>
        <Link class='Link'to={"/add"}>Back</Link>
</div>
      </form>
    </div>
  );
};

export default Edit;
