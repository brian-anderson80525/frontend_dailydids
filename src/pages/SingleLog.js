import React from "react";
import { Link, useParams } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SingleLog = ({dids, edit, deleteDid}) => {
  console.log("we are in singledid line 6", dids)
    const params = useParams()
    const id = parseInt(params.id); //get the id from url param
    const did = dids.find((did) => did.id === id);
    console.log("this is singlelogdid we need", did)
////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "2px solid green",
    width: "40%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h2>{did.activity}</h2>
      <h3>{did.time}</h3>
      <button onClick={() => deleteDid(did)}>Delete</button>
        <button onClick={() => edit(did)}>Edit</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleLog;