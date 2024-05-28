import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [input, setInput] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setInput(res.input);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { input };
};

export default useFetch;
