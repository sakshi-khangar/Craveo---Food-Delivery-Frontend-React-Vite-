//     import React, {useEffect,useState} from "react";

//     import FoodForm from "../components/FoodForm";
//     import {getAllFoods, deleteFood} from "../services/foodService";
//     import "../css/Food.css"; 


//     function Foods(){

//         const [foods,setFoods] = useState([]);
//         const [editFood, setEditFood] = useState(null); 


//         useEffect(()=>{
//             loadFoods();
//         },[]);



//         const loadFoods = async()=>{

//             try{

//                 const res = await getAllFoods();

//                 setFoods(res.data);

//             }
//             catch(error){
//                 console.log(error);
//             }

//         };



//         const removeFood = async(id)=>{

//             try{

//                 await deleteFood(id);

//                 alert("Food Deleted");

//                 loadFoods();

//             }
//             catch(error){
//                 console.log(error);
//             }

//         };

//         const handleEdit = (food) => {
//     setEditFood(food);
// };

// const clearEdit = () => {
//     setEditFood(null);
// };


//         return(

//             <div>

//                 <FoodForm
//     refreshFoods={loadFoods}
//     editFood={editFood}
//     clearEdit={clearEdit}
// />


//                 <h2>All Foods</h2>


//                 {
//                     foods.map((food)=>(

//                         <div key={food.id}>

//                             <h3>{food.name}</h3>

//                             <p>
//                                 ₹{food.price}
//                             </p>

//                             <p>
//                                 {food.description}
//                             </p>


//                             <button
// onClick={() => handleEdit(food)}
// >
//     Edit
// </button>

// <button
// onClick={() => removeFood(food.id)}
// >
//     Delete
// </button>


//                         </div>

//                     ))
//                 }


//             </div>

//         )

//     }


//     export default Foods;


import React, {useEffect,useState} from "react";
import FoodForm from "../components/FoodForm";
import {getAllFoods, deleteFood} from "../services/foodService";
import "../css/Food.css";

function Foods(){

    const [foods,setFoods] = useState([]);
    const [editFood, setEditFood] = useState(null);

    useEffect(()=>{
        loadFoods();
    },[]);

    const loadFoods = async()=>{
        try{
            const res = await getAllFoods();
            setFoods(res.data);
        }
        catch(error){
            console.log(error);
        }
    };

    const removeFood = async(id)=>{
        try{
            await deleteFood(id);
            alert("Food Deleted");
            loadFoods();
        }
        catch(error){
            console.log(error);
        }
    };

    const handleEdit = (food) => {
        setEditFood(food);
    };

    const clearEdit = () => {
        setEditFood(null);
    };

    return(
        <div className="food-page">

            <FoodForm
                refreshFoods={loadFoods}
                editFood={editFood}
                clearEdit={clearEdit}
            />

            <h2 className="food-list-heading">All Foods</h2>

            <div className="food-grid">
                {foods.map((food)=>(
                    <div className="food-card" key={food.id}>

                        <div className="food-card-img">
                            {food.image?.startsWith("http") ? (
                                <img src={food.image} alt={food.name} />
                            ) : (
                                <span>{food.image || "🍽️"}</span>
                            )}
                            <span className={`veg-badge ${food.veg ? "veg" : "nonveg"}`}>
                                {food.veg ? "🟢" : "🔴"}
                            </span>
                        </div>

                        <div className="food-card-body">
                            <h3>{food.name}</h3>
                            <p className="food-desc">{food.description}</p>
                            <p className="food-price">₹{food.price}</p>

                            <div className="food-card-actions">
                                <button onClick={() => handleEdit(food)}>
                                    Edit
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => removeFood(food.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Foods;