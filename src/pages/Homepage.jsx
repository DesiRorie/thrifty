import React from "react";
import thrift from "../assets/thrift.jpg";

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
    </>
  );
};

export default Homepage;
