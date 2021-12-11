// Import Our Components
import AllLogs from "./pages/AllLogs"
import SingleLog from "./pages/SingleLog";
import Form from "./pages/Form";
import Modal from "./components/Modal"

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import {Route, Routes, Link, useNavigate} from "react-router-dom"

/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "30px",
};

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto"
}

const div2 = {

  textAlign: "center",
  margin: "auto"
}


function App(props) {
 

  ///////////////
  // State & Other Variables
  ///////////////

  const navigate = useNavigate()
  
  // Our Api Url
  const url = "https://ba-dailydids-backend.herokuapp.com/dids/";

  // State to Hold The List of Posts
  const [dids, setDids] = useState([]);

  const nullDid = {
    activity: "",
    time: ""
  }

const [targetDid, setTargetDid] = useState(nullDid)


  //////////////
  // Functions
  //////////////

// Function to get list of  from API
const getDid = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setDids(data);
};

// function to add did
const addDid = async (newDid) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDid)
  });

   //update the list of todos
   getDid()
  }

   // to select a did to edit
   const getTargetDid = (dids) => {
    setTargetDid(dids);
    navigate("/edit");
  };

  // update did for our handlesubmit prop
  const updateDid = async (dids) => {
    await fetch(url + dids.id, {
      method: "put",
       headers: {
         "Content-Type": "application/json",
      },
       body: JSON.stringify(dids),
     });
  
    //update our blog
    getDid();
  };

  const deleteDid = async (dids) => {
    await fetch(url + dids.id, {
      method: "delete"
    })

    getDid()
    navigate("/")
  }

//////////////
// useEffects
//////////////
// useEffect to get list of dids when page loads
useEffect(() => {
  getDid();
}, []);

  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Daily Dids</h1>
      <div style={div2}>
        <h2>Based on AM's recommendation for time split (in minutes):</h2>
        <ol>
          <li>25% Doing Code Challenges</li>
          <li>25% Learning New Tech or Solidifying Foundation</li>
          <li>25% Sending Out Job Application (2 SOLID Applications per hour)</li>
          <li>25% Networking and Branding</li>
        </ol>
      </div>
      <Link to="/new"><button style={button}>Create A Did</button></Link>
      
      <Routes>
        <Route path="/" element={<AllLogs dids={dids}/>}/>
        <Route path="/dids/:id" element={<SingleLog 
        dids={dids} 
        edit={getTargetDid}
        deleteDid={deleteDid}
        />} />
         <Route path="/new" element={<Form 
          initialDid={nullDid}
          handleSubmit={addDid}
          buttonLabel="Create Did"
        />} />
        <Route path="/edit" element={<Form
          initialDid={targetDid}
          handleSubmit={updateDid}
          buttonLabel="Update Did"
        />} />
      </Routes>
      <Modal/>
    </div>
  );
}

export default App;
