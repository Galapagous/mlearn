import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const useLogout = () => {
  const navigate = useNavigate();
  const { setLoginStatus, setUserInfo } = useContext(AppContext);
  const logout = async () => {
    try {
      localStorage.removeItem("_ml_token");
      setLoginStatus(false);
      setUserInfo(null);
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return logout;
};

export default useLogout;
