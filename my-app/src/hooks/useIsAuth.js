import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../helpfulFunction";
import updateToken from "../actionCreators/updateToken";
import loginUser from "../actionCreators/login";

const useIsAuth = () => {
  const [auth, setAuth] = useState(true);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    refreshToken(token).then((newToken) => {
      if (newToken) {
        setAuth(true);
        dispatch(updateToken(newToken));
        dispatch(loginUser());
      } else {
        setAuth(false);
        dispatch(updateToken(null));
        dispatch({ type: "LOGOUT" });
      }
    });
  }, []);

  return auth;
};

export default useIsAuth;
