import React from "react";
import profile from "../../assets/profile.png";
import "../Home.css";

const Cards = () => {
  return (
    <div>
      <div
        className="banner-right-con wow slideInRight"
        id="banner-right-con"
      >
        <figure class="mb-0">
          <img
            className="rituimg"
            src={profile}
            alt="banner-right-img"
            id="banner-right-img"
          />
        </figure>
        <div className="cursor"></div>
        <div className="cursor2"></div>
      </div>
    </div>
  );
};

export default Cards;
