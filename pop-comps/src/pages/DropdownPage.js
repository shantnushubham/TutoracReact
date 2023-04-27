import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  return (
    <div>
      <h1 className="ui header">Dropdown</h1>
      <Dropdown label={"Choose your animal"} options={["Cow", "Cat", "Dog"]} />
      <Dropdown
        label={"Choose your food"}
        options={["Indian", "Chinese", "Italian"]}
      />
      <Dropdown
        label={"Choose your city"}
        options={["Pune", "Mumbai", "Delhi", "Hyderabad"]}
      />
    </div>
  );
};

export default DropdownPage;
