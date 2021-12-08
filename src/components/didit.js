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
        <h1>{did.activity}</h1>
      </Link>
      <h2>{did.time}</h2>
    </div>
  );
};

export default Did;