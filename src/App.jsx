import React, { useState } from "react";
/* import "./App.css"; */
import "./index.css";
/* import "./test.css"; */
function App() {
  const [state, setState] = useState(true);
  /* const handleClick = setState(() => state + 1); */
  return (
    <>
      <div className="containerC">
        <div className="container">
          <div className="left">
            <p>fsadcdscsdcsdcccsd</p>
            <p>casdcascacdsasdcsadsad</p>
            <p>sac</p>
            <p>casdcsad</p>
            <p>fsadcsd</p>
            <p>casdcsad</p>
            <p>fsadcsd</p>
            <p>casdcsad</p>
          </div>
          <div className="center">
            <div className="profile">Profile</div>
            <div className="picCon">
              <img src="assets\bbb.jpeg" alt="koooni" className="bigPic" />
              <div className="avatar">
                <img src="assets\dddd.jpg" alt="" className="smallPic" />
              </div>
            </div>
            <div className="idFlw">
              <div className="nikVerify">
                <div className="nik">Tasmetime</div>
                <div className="verify">
                  <img src="assets\verify.png" className="verifyMark" />
                </div>
              </div>
              <div className="buttons">
                <button className="message"></button>
                <button className="notif"></button>
                <button className="flw">Follow</button>
              </div>
            </div>
            <div className="id">@tasmetime</div>
            <div className="joined">
              <img src="assets\verify.png" alt="" className="dateIcon" />
              <p>Joined November 2023</p>
            </div>
            <div className="followers"></div>
            <div className="content">
              <div className="followers">Followers: {state}</div>
              <div className="following">Following: 11</div>
            </div>
            <div className="nax">
              <button onClick={() => setState(!state)} className="skurps">
                {!state && <p>Skurps (6)</p>}
              </button>
              <button onClick={() => setState(!state)} className="created">
                {state && <p>Created(5)</p>}
              </button>
              <button onClick={() => setState(!state)} className="collected">
                {!state && <p>Collected(3)</p>}
              </button>
            </div>
          </div>

          <div className="right">
            <p>fsadcsd</p>
            <p>casdcsad</p>
            <p>fsadcsd</p>
            <p>casdcsad</p>
            <p>fsadcsd</p>
            <p>casdcsad</p>
            <p>fsadcsd</p>
            <p>casdcsad</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
