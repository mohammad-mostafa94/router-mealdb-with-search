import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Meal = (props) => {

    const history = useHistory();

    const {idMeal,strMeal,strInstructions,strMealThumb} = props.meal;

    const buttonHandle = () =>{
        history.push(`/meal/${idMeal}`);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                {strInstructions.slice(0, 110)}...
                </Card.Text>
                <Button  onClick={buttonHandle} variant="primary">Go Details</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;