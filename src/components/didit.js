import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Did = ({ did }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/dids/${did.id}`}>
        <h2>{did.activity}</h2>
      </Link>
      <h3>{did.time}</h3>
    </div>
  );
};

export default Did;