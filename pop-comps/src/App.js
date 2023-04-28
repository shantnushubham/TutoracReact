import { useState } from "react";
import "./App.css";
import Input from "./Input";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  const [testValue, setTestValue] = useState("");

  const handleChange = (e) => setTestValue(() => e.target.value);

  return (
    <div className="body">
      <DropdownPage />
    </div>
  );
}

export default App;
