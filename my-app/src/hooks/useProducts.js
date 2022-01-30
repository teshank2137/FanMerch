import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import updateToken from "../actionCreators/updateToken";
import { refreshToken } from "../helpfulFunction";
import { API_URL } from "../utils/constants";
let localCache = [];

const useProducts = (id = null) => {
  const [products, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(false);
    if (id) {
      const product = localCache.find((item) => item.id === id);
      if (product) {
        setResponse(product);
      } else {
        fetch(`${API_URL}/product/details/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            localCache.push(data);
            setResponse(data);
          })
          .catch((err) => {
            console.error(err);
            setError(true);
          })
          .finally(setLoading(false));
      }
    } else {
      fetch(`${API_URL}/product`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //   localCache.length = 0;
          localCache.push(...data.data);
          setResponse(data.data);
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        })
        .finally(setLoading(false));
    }
    const newToken = refreshToken(token);
    if (newToken) {
      dispatch(updateToken(newToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return [products, loading, error];
};

export default useProducts;
