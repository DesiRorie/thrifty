import React from "react";
import thrift from "../assets/thrift.jpg";

function Shirtspage() {
  return (
    <>
      <div className="thriftImageDiv">
        <img src={thrift} />
        <div className="shopText">SHIRTS</div>
      </div>
      <div className="shirtsPage"></div>
    </>
  );
}

export default Shirtspage;
