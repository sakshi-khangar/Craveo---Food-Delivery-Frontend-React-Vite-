import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import Chatbot from "./components/Chatbot.jsx";


import "./App.css";
import Dashboard from "./admin/pages/Dashboard.jsx";
import Categories from "./admin/pages/Categories.jsx";
import AdminRestaurants from "./admin/pages/Restaurants";
import Foods from "./admin/pages/Foods.jsx";
import Users from "./admin/pages/Users.jsx";
import Offers from "./admin/pages/Offers.jsx";
import Orders from "./admin/pages/Orders.jsx";
import RestaurantDetail from "./pages/RestaurantDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import UserOffers from "./pages/Offers.jsx";

import MyOrders from "./pages/MyOrders.jsx";


export default function App() {

return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
                 <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/checkout" element={<Checkout />} />
<Route path="/orders" element={<MyOrders />} />
<Route path="/offers" element={<UserOffers />} />


        {/* 👇 Admin ke andar sab kuch nested — sidebar hamesha rahega */}
        <Route path="/admin" element={<Dashboard />}>
          {/* <Route index element={<AdminOverview />} />  optional, neeche note dekhiye */}
          <Route path="categories" element={<Categories />} />
          <Route path="restaurants" element={<AdminRestaurants />} />
          <Route path="foods" element={<Foods />} />
          <Route path="users" element={<Users />}/>
          <Route path="offers" element={<Offers />} />
          <Route path="orders" element={<Orders/>}/>
 
       </Route>

        <Route path="*" element={<NotFound />} />


      </Routes>

      
    </div>
);
}