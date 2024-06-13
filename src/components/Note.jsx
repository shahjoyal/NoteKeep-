import React from "react";

function Note(props){
    function Handleclick(){
        props.onDelete(props.id)
    }
    return(
        <div className="note">
           <h1>{props.title}</h1>
               <p>
             {props.content} 
            </p>
            <button onClick={Handleclick}> delete</button>
        </div>
    )
}
export default Note