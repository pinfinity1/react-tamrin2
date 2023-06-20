import { useState } from "react";
import Select from "./Components/Select";
import Box from "./Components/Box";
import "./style.css";

function App() {
  let colors = ["", "Red", "Blue", "Black", "Pink"];
  const [color, setColor] = useState("");
  const handleSetColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="container" >
      <Select onChange={handleSetColor} colors={colors} />
      <Box color={color}/>
    </div>
  );
}

export default App;
