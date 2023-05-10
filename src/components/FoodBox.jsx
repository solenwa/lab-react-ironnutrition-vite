import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ food, i, foodList, setFoodList }) {
  const totalCalories = food.servings * food.calories;

  function deleteFood(index) {
    const deletedFood = [...foodList];
    deletedFood.splice(index, 1);

    setFoodList(deletedFood);
  }
  return (
    <div>
      <Col>
        <Card title={food.name}>
          <img src={food.image} width="200px" alt="food"></img>
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <strong>Total Calories:{totalCalories} kcal</strong>
          </p>
          <Button onClick={() => deleteFood(i)}>Delete</Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
