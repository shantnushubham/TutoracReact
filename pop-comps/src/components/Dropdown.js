import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";

const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setOpen] = useState(false);

  const dropdownRef = useRef();

  const toggleOpen = (_e) => {
    setOpen((currentIsOpen) => !currentIsOpen);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(() => false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="ui card dropdown" ref={dropdownRef}>
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
                    key={option.label}
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
