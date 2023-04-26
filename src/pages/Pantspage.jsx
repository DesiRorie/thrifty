import React from "react";
import thrift from "../assets/thrift.jpg";

const Pantspage = () => {
  return (
    <>
      <div className="thriftImageDiv">
        <img src={thrift} />
        <div className="shopText">PANTS</div>
      </div>
      <div className="shirtsPage"></div>
    </>
  );
};

export default Pantspage;
