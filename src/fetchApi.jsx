import React, { useState, useEffect } from "react";
import "./test.css";
function FetchApi() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const URL = "https://jsonplaceholder.typicode.com/posts/3";
  const requestOptions = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title: "react o kir" }),
  };
  const getApi = () => {
    fetch(URL, requestOptions)
      /*       .then(() => setStatus("posted")) */
      .then((Response) => Response.json())
      .then((kon) => setStatus({ postId: kon.id }));
    fetch(URL)
      .then((Response) => Response.json())
      .then((kon) => {
        setMessage(kon);
      });
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
      <pre>{JSON.stringify(status, null, 4)}</pre>
      <pre>{JSON.stringify(message, null, 4)}</pre>
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
