import React from "react";

export default function Api() {
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>Hello</div>
    </div>
  );
}
