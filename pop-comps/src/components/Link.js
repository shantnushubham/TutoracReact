import useNavigate from "../hooks/useNavigation";

const Link = ({ to, children }) => {
  const { currentPath, navigate } = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  const styleObject = {
    background: "none",
  };

  if (currentPath === to) {
    styleObject.color = "black";
    styleObject.textDecoration = "underline";
  }

  return (
    <div className="ui button" style={styleObject} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Link;
