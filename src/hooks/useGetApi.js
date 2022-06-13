import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://recantocafeapp.herokuapp.com";

export function useGetApi(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL + url)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching };
}
