import React, { useState, useEffect } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  const getApi = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((Response) => Response.json())
      .then((kiri) => {
        console.log(kiri);
        setData(kiri);
      });
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      API
      {/* {JSON.stringify(data, null, 1)} */}
      <button onClick={getApi}>api o kir</button>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}. {item.body}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FetchApi;
