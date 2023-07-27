import React,{useState} from 'react'




export default function TextForm(props) {
    const handleupClick =()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to UpperCase","success");
    }
    const handleLoClick =()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to LowerCase","success");
    }
    const handleClearClick =()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = "";
        setText(newText)
        props.showAlert("Clear Text","success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space","success");
    }

const handleOnChange = (event)=>{
    // console.log("On change");
     setText(event.target.value);
}    
    
const [text , setText] =useState('Enter text here')
return(
    <>
     <div className="container" style= {{color:props.mode==='dark' ? 'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==='dark' ? '#042743':'white', color:props.mode==='dark' ? 'white':'black'}}id="myBox" rows="8"></textarea>
</div>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupClick}>Convert to UpperCase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower case</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
     <div className="container my-3" style= {{color:props.mode==='dark' ? 'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}  characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Nothing to Preview"}</p>

     </div>
     </>
    
  )
}
