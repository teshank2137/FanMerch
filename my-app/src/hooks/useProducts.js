import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
const localCache = [];

const useProducts = (id = null) => {
  const [products, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("useEffect");
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
          });
      }
    } else {
      fetch(`${API_URL}/product`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //   localCache.length = 0;
          //   localCache.push(...data);
          setResponse(data.data);
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        });
    }
    setLoading(false);
  }, [id]);

  return [products, loading, error];
};

export default useProducts;
