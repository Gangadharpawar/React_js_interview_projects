import React, { useState } from 'react'
import App from '../../App'
export default function Textform(props) {

    const [text,SetText] = useState('Text value');

    const HandelUpClick =()=>{
        let newtext = text.toUpperCase();
        SetText(newtext);
        props.ShowAlert('Converted to Upper Case','success');
    }
    const HandelLoClick =()=>{
      let newtext =text.toLowerCase();
      SetText(newtext);
      props.ShowAlert('Converted to Lower Case','success');
    }
    const HandelCapiClick =()=>{
      let newtext = text.charAt(0).toUpperCase() + text.slice(1);
      SetText(newtext);
      props.ShowAlert('Capitalized Done ','success');
    }
    const HandelCopyTextClick =(event)=>{
    // Get the text field
    SetText(event.target.value);
     // Copy the text inside the text field
    navigator.clipboard.writeText(text);
        // Alert the copied text
    props.ShowAlert('Copy to Clipboard ','success');

    }
    const HandelRemoveExtraspaceClick =()=>{
      let newtext = text.split(/[ ]+/);
      SetText(newtext.join(' '))
      props.ShowAlert('Removed  Extra Space ','success');
    }
    
    const HandelClearClick =() =>{
      SetText('');
      props.ShowAlert('Clear All  ','success');
    }

    // const HanelOnChange =(event) =>{
    //     SetText(event.target.value);
    // }
  return (
    <>
    <div className='container'>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="mybox" value={text} onChange={(e=>SetText(e.target.value))} rows="8"></textarea>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={HandelUpClick}>CONVERT  TO UPPER CASE</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={HandelLoClick}>Convert To Lower Case</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={HandelCapiClick}>Capitalized Case</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={HandelCopyTextClick}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={HandelRemoveExtraspaceClick}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={HandelClearClick}>Clear</button>
   
        </div>
    </div>
    <div className='container'>
      <h2> Your Text summery</h2>
      <p>{text.split(' ').filter((e) =>{return e.length !==0}).length} Wrod and {text.length} Characters </p>
      <p>{0.008 * text.split(' ').length} Minutes Read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
