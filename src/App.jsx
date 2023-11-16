import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="background">
          <p>Profile</p>
          <div className="backpic">
            <img src="assets/bbb.jpeg" alt="kiri" className="bigPic" />
            <div className="avatar">
              <img src="assets/dddd.jpg" alt="koooooni" className="avatarPic" />
            </div>
          </div>
        </div>
        <div className="username">
          <div className="nickname">
            <div className="id">
              <p className="nick">
                Tasmetime
                <img src="assets/verify.png" alt="" className="verifyPic" />
              </p>
              <p>@tasmetime</p>
            </div>
            <div className="buttons">
              <button>
                <img src="" alt="" />
              </button>
              <button>
                <img src="" alt="" />
              </button>
              <button>follow</button>
            </div>
          </div>
          <div className="join">
            <img src="" alt="" />
            <p>Joined November 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
