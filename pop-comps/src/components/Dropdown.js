import { useState } from "react";

const Dropdown = ({ label, options }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleOpen = (_e) => {
    setOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      <label onClick={toggleOpen}>
        {selectedValue ? `Selected: ${selectedValue}` : `${label}:`}
      </label>
      <div>
        {isOpen && (
          <div>
            <div
              onClick={(_e) => {
                setSelectedValue(() => "");
                toggleOpen();
              }}
            >
              Select...
            </div>
            {options.map((option) => {
              return (
                <div
                  onClick={(_e) => {
                    setSelectedValue(() => option);
                    toggleOpen();
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
