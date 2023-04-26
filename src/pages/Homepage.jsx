import React from "react";
import thrift from "../assets/thrift.jpg";
import shirt from "../assets/shirts.jpg";
import pants from "../assets/pants.jpg";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="thriftImageDiv">
        <img src={thrift} />
        <div className="shopText">SHOP</div>
      </div>
      <div className="greetingDiv">
        <div className="greetingDivContent">
          <h2>EXPLORE THRIFTY</h2>
          <p>
            We offer affordable and unique items, from vintage clothing to retro
            home decor. Find treasures that fit your style and budget with us.
            Happy shopping!
          </p>
        </div>
      </div>
      <div className="shopGenreContainers">
        <div className="shopGenres">
          <Link to="/shirts">
            <img src={shirt} />

            <h3>SHIRTS</h3>
          </Link>
        </div>
        <div className="shopGenres">
          <Link to="/pants">
            <img src={pants} />

            <h3>PANTS</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
