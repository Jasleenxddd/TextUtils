import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");

    }    
    const handleClr=()=>{
        console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText);
        props.showAlert("Text is cleared!","success");

    }    
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

        props.showAlert("Text copied to clipboard!","success");

    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space is removed!","success");

    }
    const handleIt = () => {
        document.getElementById("myBox").style.fontStyle = "italic";
        props.showAlert("Text converted to Italic!" , "Success");
    };
    const handleReverse = () => {
        var splitString = text.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        setText(joinArray);
        props.showAlert("Text is Reversed!" , "Success");
    };


    const [text,setText]=useState('');
    // text="new text" wrong way to change the state
    // setText("new text") right way to change the text

return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>

<h1>{props.heading}</h1>
<div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClr}>Clear text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Remove extra spaces</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleIt}>Italic</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleReverse}>Reverse text</button>


</div>
<div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    {/* filter to fix that word issue */}
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>
)
}
