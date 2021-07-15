import React from "react";
import "./mobileApp.css";

//image
import mobileModel from "./restaurant-pic/web-app-img.png";

function MobileApp() {
  return (
    <div className="mobile-main-box">
      <div className="mobile-container">
        <div className="mobile-sub-topic">
          Better Experience <br />
          with Mobile App
        </div>
        <div className="mobile-description">
          <p>
            Satisfy your appetites by having the food you crave from your
            favorite restaurant delivered to you quickly. FAVFOOD is now
            available in Bangkok. We're rapidly expanding, so stay tuned for
            additional regions to open shortly!
          </p>
        </div>
        <div className="mobile button">Download on the App Store</div>
      </div>
      <div className="mobile-img">
        <img src={mobileModel} alt="mobile-model" />
      </div>
      <div className="mobile-right">
        <div className="m-right-content">
          <p className="m-right-topic">No minimum order</p>
          <div className="m-dash" />
          <p>
            from small bite to big meal! We won't limit your craving. Go ahead
            and order what you want
          </p>
        </div>
        <div className="m-right-content">
          <p className="m-right-topic">Foods for all cravings</p>
          <div className="m-dash" />
          <p>
            from local fare to favourite restaurant, our wide selection of food
            will definitely satisfy all your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
