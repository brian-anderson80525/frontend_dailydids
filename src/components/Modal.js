import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./modal.css";

function Modal(){
    const [modal, setModal] = useState(false);

    const switchModal = () => {
setModal(!modal)
    }


    return (
        <>
        {/* had to put button on one line as it confused me to have it on multi */}
        <button onClick={switchModal}className="butn_modal">Open Me</button>
        
    {modal && (
        <div className="modal">
            <div onClick={switchModal}className="overlay"></div>
            <div className="mod_content">
                <h2>Progress Report</h2>
                <h3>number of days in a row: 5</h3>
                {/* same here on button...need it one line */}
                <button onClick={switchModal}className="close_modal">CLOSE</button>
            </div>

        </div>
    )}
        </>

    );
}


export default Modal;