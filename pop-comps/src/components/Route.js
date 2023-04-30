import useNavigate from "../hooks/useNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigate();
  
  if (currentPath === path) {
    return children;
  }
};

export default Route;
