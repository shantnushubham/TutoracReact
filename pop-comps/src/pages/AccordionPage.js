import { useState } from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // We will have a state variable to understand if the item is collapsed or expanded

  // We will create a function that handles the click event to expand or collapse it.
  const array = [
    {
      label: "This is label 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium. Quis blandit turpis cursus in hac habitasse. Arcu risus quis varius quam quisque id diam. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nam libero justo laoreet sit amet cursus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nam at lectus urna duis convallis convallis tellus id. Venenatis tellus in metus vulputate eu scelerisque felis. Viverra orci sagittis eu volutpat odio facilisis mauris. Nec tincidunt praesent semper feugiat nibh. Aenean euismod elementum nisi quis. Tristique nulla aliquet enim tortor at auctor urna nunc id. Eget nunc scelerisque viverra mauris in aliquam. Commodo odio aenean sed adipiscing.",
    },
    {
      label: "This is label 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium. Quis blandit turpis cursus in hac habitasse. Arcu risus quis varius quam quisque id diam. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nam libero justo laoreet sit amet cursus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nam at lectus urna duis convallis convallis tellus id. Venenatis tellus in metus vulputate eu scelerisque felis. Viverra orci sagittis eu volutpat odio facilisis mauris. Nec tincidunt praesent semper feugiat nibh. Aenean euismod elementum nisi quis. Tristique nulla aliquet enim tortor at auctor urna nunc id. Eget nunc scelerisque viverra mauris in aliquam. Commodo odio aenean sed adipiscing.",
    },
    {
      label: "This is label 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium. Quis blandit turpis cursus in hac habitasse. Arcu risus quis varius quam quisque id diam. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nam libero justo laoreet sit amet cursus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nam at lectus urna duis convallis convallis tellus id. Venenatis tellus in metus vulputate eu scelerisque felis. Viverra orci sagittis eu volutpat odio facilisis mauris. Nec tincidunt praesent semper feugiat nibh. Aenean euismod elementum nisi quis. Tristique nulla aliquet enim tortor at auctor urna nunc id. Eget nunc scelerisque viverra mauris in aliquam. Commodo odio aenean sed adipiscing.",
    },
  ];

  return (
    <div>
      <h1 className="ui header">Accordion</h1>
      <div className="ui styled fluid accordion">
        {array.map((element, index) => {
          return (
            <Accordion
              element={element}
              key={index}
              index={index}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionPage;
