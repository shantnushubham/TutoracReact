import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

const useNavigate = () => useContext(NavigationContext);

export default useNavigate;
