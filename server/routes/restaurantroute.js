import express from 'express';
import {createrestaurant, getAll, getOne, restaurantdelete, update} from '../controller/restaurantcontroller.js';
const route=express.Router();
route.post('/create',createrestaurant);
route.get('/getAll',getAll);
route.get('/getOne/:id',getOne);
route.put('/update/:id',update);
route.delete('/delete/:id',restaurantdelete);
export default route;