import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleupclick = (event) => {
    event.preventDefault();
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  };
  const handlelowclick = (event) => {
    event.preventDefault();
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };
  const handleclearclick= (event) =>{
    event.preventDefault();
    console.log("cleartext" + text);
    let newText= ' ';
    setText(newText);
    props.showAlert("text clear","success");
  }
  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const handlecopyclick = () =>{
    var text= document.getElementById("mybox")
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("copy to clipboard","success");
}  
const handleextraspaces =()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("removed extraspaces","success");
}
//const [text, setText] = useState('ente');
  // text="awdqefggweg";wrong way to change state.
  //setText("segsrgerht"); right way to set text;
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            type="password"
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows={8}
            style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'#042743'}}
          ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleupclick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handlelowclick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleclearclick}>
            clear text
          </button>
          <button className="btn btn-primary mx-1" onClick={handlecopyclick}>
          copy to clipboard
          </button>
          <button className="btn btn-primary mx-1" onClick={handleextraspaces}>
          extraspaces
          </button>
        </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length}</p>
    <h2>preview</h2>
    <p>{text.length!==0?text:"enter something to preview here"}</p>
    </div>
    </>
  );
}
