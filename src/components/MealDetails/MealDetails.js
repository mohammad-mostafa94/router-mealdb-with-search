import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetails = () => {

    const {mealId} = useParams();
    

    const [meal, setMeal] = useState([]);

    // console.log("meal=",meal);
    console.log("meal details=",meal);
    const {strMeal,strMealThumb,strInstructions} = meal;

    useEffect(()=>{
        const url =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]));
    },[])
    return (
        <div>
            <Card className="bg-dark text-white">
           
                <Card.Img src={strMealThumb} />
                <Card.ImgOverlay>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions}
                    </Card.Text>
                    
                </Card.ImgOverlay>
                </Card>
        </div>
    );
};

export default MealDetails;