import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [data, setData] = useState([]);
  const getData = async () => {
    axios.get('https://api.kinocheck.de/movies?tmdb_id=299534')
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
        {/* {data.map((val) => {
          return (
            <div>
              <div>{val.id}</div>
            </div>
          );
        })} */}
        {/* {data && (
          <div>
            <div><img src={data.images}/></div>
            <div>{data.name}</div>
            <a href={data.homePage}>Open</a>
          </div>
        )} */}
      </div>
    </div>
  );
}
