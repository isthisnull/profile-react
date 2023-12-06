import React, { useState, useEffect } from "react";
import "./test.css";
function FetchApi() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const URL = "https://jsonplaceholder.typicode.com/posts/3";
  const getApi = () => {
    fetch(URL, { method: "DELETE" })
      .then(() => setStatus("Delete successful"))
      .then((Response) => Response.json())
      .then((kon) => setMessage(kon));

    /* .then((Response) => Response.json())
      .then((kiri) => {
        console.log(kiri);
        setData(kiri);
      }); */
  };

  /*   useEffect(() => {
    async function deletePost() {
      await fetch(URL, { method: "DELETE" });
      setStatus("ok");
    }
    deletePost();
  }, []); */
  return (
    <>
      API
      {JSON.stringify(status, null, 4)}
      {JSON.stringify(message, null, 4)}
      <button onClick={getApi}>get api</button>
      {/*       <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}. {item.body}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default FetchApi;
