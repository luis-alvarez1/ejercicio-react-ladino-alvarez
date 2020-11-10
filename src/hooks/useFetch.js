import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          loading: false,
          error: null,
          data,
        });
      })
      .catch((error) => {
        console.log(error);
        setState({
          ...state,
          data: [],
          loading: false,
          error,
        });
      });
  }, [url]);

  return state;
};
