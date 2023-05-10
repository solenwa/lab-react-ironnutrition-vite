import React, { useState } from "react";
import { Input, Button } from "antd";

function AddFoodForm({ setFoodList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleCreate = (event) => {
    event.preventDefault();
    setFoodList((prevFoodList) => [
      ...prevFoodList,
      { name, image, calories, servings },
    ]);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div>
      <form
        onSubmit={handleCreate}
        name="nest-messages"
        style={{ maxWidth: 600 }}
      >
        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Image</label>
        <Input
          value={image}
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <label>Calories</label>
        <Input
          value={calories}
          type="number"
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />

        <label>Servings</label>
        <Input
          value={servings}
          type="number"
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />

        <Button type="submit" htmlType="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
