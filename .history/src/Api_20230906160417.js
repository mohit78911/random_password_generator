import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/countries",
      headers: {
        "X-RapidAPI-Key": "7a0b0ccac1msh682d91659ad1f84p1ab359jsn0979ccdd10ab",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data.result.in.services.apple);
      setData(response.data.result.in.services.apple);
    } catch (error) {
      console.error(error);
    }
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
        {data && (
          <div>
            {/* <div>{data && <img src={data.images.lightThemeImage}/>}</div> */}
            <div>{data.name}</div>
            <a href={data.homePage}>Open</a>
          </div>
        )}
      </div>
    </div>
  );
}
