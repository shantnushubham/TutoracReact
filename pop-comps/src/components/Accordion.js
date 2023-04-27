const Accordion = ({
  element: { label, description },
  index,
  expandedIndex,
  setExpandedIndex,
}) => {
  const isExpanded = index === expandedIndex;

  const content = isExpanded && (
    <div className="active content">
      <p>{description}</p>
    </div>
  );

  return (
    <div
      onClick={(_e) => {
        setExpandedIndex((currentExpandedIndex) => {
          if (currentExpandedIndex === index) {
            return -1;
          }
          return index;
        });
      }}
    >
      <div className={`${isExpanded ? "active title" : "title"}`}>
        <i className="dropdown icon" />
        {label}
      </div>
      {content}
    </div>
  );
};

export default Accordion;
