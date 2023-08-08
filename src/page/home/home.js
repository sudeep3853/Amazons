import "./home.css";
function Home() {
  return (
    <div className="">
      {/* header */}
      <div className="header text-white   align-items-center     px-3  ">
        <div className=" d-flex h-100 py-2 ">
          <div className=" d-flex am px-1 align-items-center ">
            <img
              className="  d-flex pt-2"
              width={105}
              src="./images/amazon.png"
              alt=""
            />
            <div className=" d-flex justify-content-start h-100 align-items-center">
              .in
            </div>
          </div>
          <div className=" d-flex align-items-center px-1 ad">
            <div className=" d-flex h-100 px-1 align-items-center">
              <i class="fa-solid fa-location-dot text-white"></i>
            </div>
            <div>
              <div className=" hello text-light">Hello</div>
              <div className="address"> Select your address</div>
            </div>
          </div>
        </div>
        <div className=" d-flex width py-2 px-2  ">
          <div className=" d-flex all align-items-center">
            <div>All</div>
            <div>
              <i class="fa-solid fa-caret-down arrow text-secondary"></i>
            </div>
          </div>
          <div className=" w-100 h-100">
            <input
              className="search px-2"
              type="text"
              placeholder="Search Amazon.in"
            />
          </div>
          <div className="mag me-4 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className=" d-flex align-items-center h-100 py-2 ">
          <div className=" d-flex en align-items-center">
            <img
              width={25}
              height={20}
              src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg"
              alt=""
            />
            <div className=" ps-1">EN</div>
            <div className="  px-1 d-flex align-items-end">
              <i class="fa-solid fa-caret-down arrow text-secondary"></i>
            </div>
          </div>
          <div className=" d-flex px-2 ac align-items-center">
            <div>
              <div className="hello">Hello,sign in</div>
              <div className="address">Account & Lists</div>
            </div>
            <div className=" d-flex align-items-end">
              <i class="fa-solid fa-caret-down arrow text-secondary px-1"></i>
            </div>
          </div>
          <div className="px-2 order d-flex justify-content-center flex-column">
            <div className="hello">Return</div>
            <div className="address">& Orders</div>
          </div>
          <div className=" d-flex ca align-items-center position-relative">
            <div>
              <img width={30} src="./images/cart1.png" alt="" />
            </div>
            <div className=" cart">0</div>
            <div className="address d-flex align-items-end">Cart</div>
          </div>
        </div>
      </div>
      {/* header */}

      {/* nav */}
      <div className="catlist px-2 py-2">
        <div className=" d-flex px-2 align-items-center">
          <i class="fa-solid fa-bars"></i>
          <div className="px-1 ">All</div>
        </div>

        <div className=" px-2">Amazon miniTV</div>
        <div className=" px-2">Sell</div>
        <div className=" px-2">Best Sellers</div>
        <div className=" px-2">Today's Deals</div>
        <div className=" px-2">Mobiles</div>
        <div className=" px-2">New Releases</div>
        <div className=" px-2">Customer Service</div>
        <div className=" px-2 d-flex">
          <div>Prime</div>
          <div className=" px-2">
            <i class="fa-solid fa-caret-down arrow text-secondary"></i>
          </div>
        </div>
        <div className=" px-2">Electronics</div>
        <div className=" px-2"> Home & kitchen</div>
        <div className=" px-2">Fashion</div>
        <div className=" px-2">Computers</div>
        <div className=" px-2">Gift Ideas</div>
        <div className=" px-2">Amazon Pay</div>
        <div className=" px-2">Books</div>
        <div className=" px-2">Coupons</div>
      </div>
      {/* nav */}
      {/* banner */}
         

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/home1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/home2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/home3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/home4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/home5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/home6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/home7.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    </div>
  );
}

export default Home;
