import Dropdown from "../components/Dropdown";
import { useState } from "react";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState({});

  const options = [
    { label: "cat", displayText: "Cat" },
    { label: "dog", displayText: "Dog" },
    { label: "cow", displayText: "Cow" },
  ];

  const handleSelectionChange = (option) => {
    setSelectedOption(() => option);
  };

  return (
    <div>
      <h1 className="ui header">Dropdown</h1>
      <Dropdown
        label={"Choose your animal"}
        options={options}
        value={selectedOption}
        onChange={handleSelectionChange}
      />
    </div>
  );
};

export default DropdownPage;
