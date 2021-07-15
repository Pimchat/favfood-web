import React from "react";
import "./recommends.css";

import dish3 from "./restaurant-pic/dish3.jpg";

function Recommends() {
  return (
    <div className="recommends-box">
      <div className="sub-topic">Dish of the day</div>
      <div className="menu-show">
        <div className="menu-board">
          <div className="menu-box">
            <div className="menu-img">
              <img src={dish3} alt="menu" />
            </div>
            <div className="menu-all-detail">
              <div className="menu-name">Spicy Chicken Pasta</div>
              <div className="side-dish">Served with fried potato + drink</div>
              <div className="menu-detail">
                This Spicy Chicken Pasta is the perfect level of spice, whilst
                absolutely bursting with flavour. It’s tomatoey, creamy, hearty
                and delicious!
              </div>
            </div>
          </div>
          <div className="menu-box">
            <div className="menu-img">
              <img src={dish3} alt="menu" />
            </div>
            <div className="menu-all-detail">
              <div className="menu-name">Spicy Chicken Pasta</div>
              <div className="side-dish">Served with fried potato + drink</div>
              <div className="menu-detail">
                This Spicy Chicken Pasta is the perfect level of spice, whilst
                absolutely bursting with flavour. It’s tomatoey, creamy, hearty
                and delicious!
              </div>
            </div>
          </div>
          <div className="menu-box">
            <div className="menu-img">
              <img src={dish3} alt="menu" />
            </div>
            <div className="menu-all-detail">
              <div className="menu-name">Spicy Chicken Pasta</div>
              <div className="side-dish">Served with fried potato + drink</div>
              <div className="menu-detail">
                This Spicy Chicken Pasta is the perfect level of spice, whilst
                absolutely bursting with flavour. It’s tomatoey, creamy, hearty
                and delicious!
              </div>
            </div>
          </div>
          <div className="menu-box">
            <div className="menu-img">
              <img src={dish3} alt="menu" />
            </div>
            <div className="menu-all-detail">
              <div className="menu-name">Spicy Chicken Pasta</div>
              <div className="side-dish">Served with fried potato + drink</div>
              <div className="menu-detail">
                This Spicy Chicken Pasta is the perfect level of spice, whilst
                absolutely bursting with flavour. It’s tomatoey, creamy, hearty
                and delicious!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommends;
