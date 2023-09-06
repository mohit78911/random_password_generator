import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [data, setData] = useState([]);
  const getData = async () => {
    axios
      .get("https://api.kinocheck.de/movies?tmdb_id=299534")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
    console.log("data", data);
  return (
    <div>
      <div>Hello</div>
      <button className="btn btn-danger" onClick={() => getData()}>
        getData
      </button>
      <div>
        {
            data && <div>{data}</div>
        }
      </div>
    </div>
  );
}
