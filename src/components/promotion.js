import React from "react";
import "./promotion.css";

function Promotion() {
  return (
    <div className="promo-box">
      <div id="promo-bg" />
      <div className="promo-topic">Get Free Coupon Now</div>
      <div className="promo-detail">
        We'd love to help you save your money. Get the coupon now and enjoy the
        most delicious meal at the lowest price ever!
      </div>
      <div className="form">
        <input className="input" placeholder="Your name" />
        <input className="input" placeholder="Your e-mail" />
        <button className="sub-btn">Subscribe Now </button>
      </div>
    </div>
  );
}

export default Promotion;
