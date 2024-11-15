import restaurant from "../model/restaurantmodel.js"
export const createrestaurant = async(req,res) =>{
    try{
        const restaurantdata = restaurant(req.body)
        if(!restaurantdata){
            return res.status(404).json({message:"Restaurant data not found"});
        }
        await restaurantdata.save();
        res.status(200).json({message:"Successfully created restaurant"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

};
// export default createrestaurant;
export const getAll = async(req,res)=>{
    try{
    const restaurantdata=await restaurant.find()
    if(!restaurantdata){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantdata);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export const getOne = async(req,res)=>{
    try{
        const id=req.params.id;
    const restaurantdata=await restaurant.findById(id)
    if(!restaurantdata){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantdata);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
    // try {
    //     const id = req.params.Name; // Fetch the name from the request parameters
    //     const restaurantdata = await restaurant.findOne({ Name: id });
    //     if (!restaurantdata) {
    //         return res.status(404).json({ msg: "Restaurant data not found" });
    //     }
    //     res.status(200).json(restaurantdata);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
}

export const update = async(req,res)=>{
    try{
        const id=req.params.id;
        const restaurantdata=await restaurant.findById(id)
    if(!restaurantdata){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantdata);
    
    const updatedata=await restaurant.findByIdAndUpdate(id,req.body,{new:true});
    }

    catch(error){
        res.status(500).json({error:error.message})
    }
};

export const restaurantdelete = async(req,res)=>{
    try{
        const id=req.params.id;
        const restaurantdata=await restaurant.findById(id)
    if(!restaurantdata){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantdata);

    
    const deletedata=await restaurant.findByIdAndDelete(id,req.body,{new:true});
    }

    catch(error){
        res.status(500).json({error:error.message})
    }
};