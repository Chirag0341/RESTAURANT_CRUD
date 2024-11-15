import {React,useState}from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link, useNavigate } from 'react-router-dom';
import "./add.css";
const Add =()=>{
    const restaurants={
        Name:'',
        Type:'',
        Location:'',
        Rating:'',
        Top_food:''
    };
    const [restaurant, setRestaurant]=useState(restaurants)
    const navigate=useNavigate();
    const inputHandler = (e)=>{
        const {name,value}= e.target;
        setRestaurant({...restaurant,[name]:value})
        }
    const submitHandler = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",restaurant)
        .then((response)=>{
            toast.success(response.data.msg=("Added succesfully"),{position:"top-right"});
            navigate("/")
        })
        .catch((error)=>console.log(error));
    }
    return (
        <div>
            <h2><b>New Restaurant</b></h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='Name'>Restaurant Name:</label>
                    <input type='text' id='Name' name='Name' value={restaurant.Name} placeholder='Restaurant Name' onChange={inputHandler}></input>
                </div>
                <div>
                    <label htmlFor='Type'>Restaurant Type:</label>
                    <input type='text' id='Type' name='Type' value={restaurant.Type} placeholder='RType' onChange={inputHandler}></input>
                </div>
                <div>
                    <label htmlFor='Location'>Restaurant Location:</label>
                    <input type='text' id='Location' name='Location' value={restaurant.Location} placeholder='Location' onChange={inputHandler}></input>
                </div>
                <div>
                    <label htmlFor='Rating'>Restaurant Rating:</label>
                    <input type='Number' id='Rating' name='Rating' value={restaurant.Rating} placeholder='Rating' onChange={inputHandler}></input>
                </div>
                <div>
                    <label htmlFor='Top_food'>Top Food:</label>
                    <input type='text' id='Top_food' name='Top_food' value={restaurant.Top_food} placeholder='Top food' onChange={inputHandler}></input>
                </div>
                <div class="button-container">
    <button type="submit">Add</button>
    <Link class="Link" to={"/"}>BACK</Link>
</div>

                
            </form>

        </div>
        
    )
}
export default Add;