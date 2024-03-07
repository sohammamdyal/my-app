import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick = () =>
    {
         // console.log("Uppercase was clicked" + text);
         let newText = '';
         setText(newText);
         props.showAlert("Cleared the Text","success");
        
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }

    const handleSelectClick = () =>
    {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");
    }
    const [text,setText] = useState('Enter Text here');
    // setText = ("new Text");
  return (
    <>
    <div className= "container" style={{color:props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3" >
     <label htmlFor="myBox" class="form-label"></label>
    <textarea className="form-control" 
    value={text} onChange ={handleOnChange}  
    style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert in to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert in to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleSelectClick}>Copy Text</button>
    </div>

    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} word,{text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minute to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
