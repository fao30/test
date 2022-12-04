import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import InputField from "./components/InputField";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState([{ name: "Ryan", age: 20 }]);

  return (
    <div className="App">
      {data?.map((element) => {
        return (
          <div
            className="ml-4 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card nameProps={element.name} ageProps={element.age} />
          </div>
        );
      })}
      <div className="ml-4 mt-4">
        <InputField
          valueTyped={(e) => {
            setName(e);
          }}
          type="text"
          placeholderValue="write your name"
        />
      </div>
      <div className="ml-4 mt-4">
        <InputField
          valueTyped={(e) => {
            setAge(e);
          }}
          type="number"
          placeholderValue="write your age"
        />
      </div>
      <button className="btn btn-primary mt-4 mb-4">Add new card</button>
    </div>
  );
}

export default App;
