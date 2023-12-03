import React, { useState } from "react";

import "./index.css";

function App() {
  const [show, setShow] = useState(1);
  const [follow, setFollow] = useState(false);
  const [mamad, setMamad] = useState(true);
  const kosKesh = () => {
    setMamad(!mamad);
  };
  const kiri = () => {
    setMamad(!mamad);
    setFollow(!follow);
  };
  const nikname = "@tasmetime";
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
                <button
                  className={follow ? "messageShow" : "dontShowContent"}
                ></button>
                <button
                  className={follow ? "notifShow" : "dontShowContent"}
                ></button>
                <button
                  className={follow ? "unFollow" : "flw"}
                  onClick={() => (follow ? kosKesh() : setFollow(!follow))}
                >
                  {follow ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="id">@tasmetime</div>
            <div className="joined">
              <img src="assets\verify.png" alt="" className="dateIcon" />
              <p>Joined November 2023</p>
            </div>
            <div className="followers"></div>
            <div className="content">
              <div className="followers">Followers: 11</div>
              <div className="following">Following: 11</div>
            </div>
            <div className="nax">
              <button
                onClick={() => {
                  setShow(1);
                }}
                className="skurps"
              >
                Skurps (6)
              </button>
              <button
                onClick={() => {
                  setShow(2);
                }}
                className="created"
              >
                Created(5)
              </button>
              <button
                onClick={() => {
                  setShow(3);
                }}
                className="collected"
              >
                Collected(3)
              </button>
            </div>
            <div className={show === 1 ? "showContent" : "dontShowContent"}>
              <div className="info">
                <div>
                  <img src="assets/dddd.jpg" alt="" className="smallPic" />
                </div>
                <div>
                  <div>Tasmetime</div>
                  <div>@tasmetime</div>
                  <div className="testimg"></div>
                </div>
              </div>
            </div>
            <div className={show === 2 ? "showContent" : "dontShowContent"}>
              i am created
            </div>
            <div className={show === 3 ? "showContent" : "dontShowContent"}>
              i am collected
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
          <div className={mamad ? "unflwConfirmDontShow" : "unflwConfirm"}>
            <div className="background"></div>
            <div className="msgText">
              <div className="unfollowQ">
                <p>Unfollow</p>
                <img src="" alt="" />
              </div>
              <p>{nikname}</p>
              <p>
                You won't see their skurpy on your home timeline anymore, but
                you can still access their profile.
              </p>
              <div className="butons">
                <button onClick={() => kiri()} className="unFollowbtn">
                  Unfollow
                </button>
                <button className="cancle">Cancle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
