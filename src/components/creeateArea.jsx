import React, { useState } from "react";

function CreateArea(props) {
    const [note ,Setnote]=useState({
        content:"",
        title:""
    })
    function handleChange(event){
       const {name,value}=event.target
       Setnote(prev=>{
        return{
            ...prev,
            [name]:value
        }
       })
    }

    function handleClick(event){
     props.onAdd(note);
     Setnote({
        content: "",
        title: ""
     }
)
 event.preventDefault();
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
