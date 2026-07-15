import React, { useState, useEffect } from "react";
import { addFood, updateFood } from "../services/foodService";
  import "../css/Food.css"; 


function FoodForm({ refreshFoods, editFood, clearEdit }) {

const [food, setFood] = useState({
    name:"",
    description:"",
    image:"",
    price:"",
    veg:"true",
    restaurantId:""
});
useEffect(() => {
    if (editFood) {
        setFood({
            name: editFood.name,
            description: editFood.description,
            image: editFood.image,
            price: editFood.price,
            veg: String(editFood.veg),
            restaurantId: editFood.restaurant.id
        });
    }
}, [editFood, clearEdit]);

    const handleChange = (e)=>{
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{

const foodData = {
    ...food,
    price: Number(food.price),
    restaurantId: Number(food.restaurantId),
    veg: food.veg === "true"
};

if (editFood) {

    await updateFood(editFood.id, foodData);

    alert("Food Updated Successfully");

    clearEdit();

} else {

    await addFood(foodData);

    alert("Food Added Successfully");

}
setFood({
    name:"",
    description:"",
    image:"",
    price:"",
    veg:"true",
    restaurantId:""
});

            refreshFoods();

        }
        catch(error){
            console.log(error);
            alert("Food Add Failed");
        }
    };


return (
    <form className="food-form" onSubmit={handleSubmit}>

        <h2>{editFood ? "Edit Food" : "Add Food"}</h2>

        <input
        name="name"
        placeholder="Food Name"
        value={food.name}
        onChange={handleChange}
        />

        <input
        name="description"
        placeholder="Description"
        value={food.description}
        onChange={handleChange}
        />

        <input
        name="image"
        placeholder="Image URL"
        value={food.image}
        onChange={handleChange}
        />

        <input
        name="price"
        placeholder="Price"
        value={food.price}
        onChange={handleChange}
        />

        <select
        name="veg"
        value={food.veg}
        onChange={handleChange}
        >
            <option value="true">Veg</option>
            <option value="false">Non Veg</option>
        </select>

        <input
        name="restaurantId"
        placeholder="Restaurant ID"
        value={food.restaurantId}
        onChange={handleChange}
        />

       <button type="submit">
            {editFood ? "Update Food" : "Add Food"}
       </button>

    </form>
)
}


export default FoodForm;