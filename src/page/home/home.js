import "./home.css";
function Home() {
  return (
    <div>
      <div className="header text-white  ">
        <div>
          <img className=" h-100 d-flex " src="./images/logo.png" alt="" />
        </div>
        <div className=" d-flex align-items-center">
          <div>
            <i class="fa-solid fa-location-dot text-white"></i>
          </div>
          <div>
            <div className=" hello">hello</div>
            <div className="address"> Select your address</div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>EN</div>
          <div></div>
        </div>
        <div>
          <div>
            <div>Hello,sign in</div>
            <div>Account & Lists</div>
          </div>
          <div></div>
        </div>
        <div>
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
