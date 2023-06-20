import { useState } from "react";
import Input from "./Components/Input";
import Text from "./Components/Text";

function App() {
  const [string, setString] = useState("");
  const handleString = (e) => {
    setString(e.target.value);
  };
  return (
    <div>
      <Input onChange={handleString} type="text"/>
      <Text string={string.length} />
    </div>
  );
}

export default App;
