import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./creeateArea";
function App(){
  const [notes,Setnotes]=useState([]);
  function Addnote(Newnote){
 Setnotes(prev=>{
  return [...prev,Newnote]
 })
  }
  function Deletenote(id){
  Setnotes(prev=>{
    return prev.filter((nitem,index)=>{
      return id!==index

    })
  })
  }
return (
    <div>
        <Header/>
      <CreateArea onAdd={Addnote}/>
          {notes.map((nitem,index)=>{
            return <Note
            key={index}
            id={index}
            title={nitem.title}
            content={nitem.content}
            onDelete={Deletenote}
            />
          })}

        

        <Footer/>

    </div>
)
}

export default App;