import { useState } from "react";
import Panel from "./Panel";

const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = (_e) => {
    setOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div className="ui card dropdown">
      <div className="content" onClick={toggleOpen}>
        <div className="header">
          {value?.displayText ? `Selected: ${value.displayText}` : `${label}:`}
          <i
            className={`angle ${isOpen ? "up" : "down"} icon`}
            style={{ float: "right" }}
          />
        </div>
      </div>
      <div>
        <Panel>
          {isOpen && (
            <div className="ui card">
              <div
                className="content custom"
                onClick={(_e) => {
                  onChange({});
                  toggleOpen();
                }}
              >
                <div className="description">Select...</div>
              </div>
              {options.map((option) => {
                return (
                  <div
                    className="content custom"
                    onClick={(_e) => {
                      onChange(option);
                      toggleOpen();
                    }}
                  >
                    <div className="description">{option.displayText}</div>
                  </div>
                );
              })}
            </div>
          )}
        </Panel>
      </div>
    </div>
  );
};

export default Dropdown;
