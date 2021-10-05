import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {

    const [searchText , setSearchText] = useState([]);

    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            setMeals(data.meals)
            setSearchText(data.meals);
        });
    },[]);

    const  changeHandler = event => {
        const searchTextValue = event.target.value;
        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchTextValue.toLowerCase()))
        setSearchText(matchedMeals);
    }
    
    return (
        <div className="text-center mt-5">
        <input onChange={changeHandler} type="text" name="" id="" />

        <Button  variant="primary">Search meal</Button>
        <nav>
        <Link to="/meals"><button> All meals</button></Link>
            
        </nav>
            <h1> Restaurant</h1>
            <div className="meals-container">
                {
                    searchText.map(meal => <Meal
                    key = {meal.idMeal}
                    meal = {meal}></Meal>)
                }
            </div>
           
        </div>
    );
};

export default Restaurant;