import React, { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import { Divider, Row } from "antd";

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <div className="SearchBar">
        <Divider>Search</Divider>
        <SearchBar />
      </div>
      <div className="AddFoodEntry">
        <Divider>Add Food Entry</Divider>
        <AddFoodForm setFoodList={setFoodList} />
      </div>
      <div className="FoodList">
        <Divider>Food List</Divider>
        <Row gutter={[40, 40]}>
          {foodList.map((food, i) => {
            return (
              <div key={food.name + i}>
                <FoodBox
                  food={{
                    name: food.name,
                    calories: food.calories,
                    image: food.image,
                    servings: food.servings,
                  }}
                />
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default App;
