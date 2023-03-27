import React, {useState} from 'react'

export default function TextForm(props) {
    
    let newtext
    const handleUpClick = ()=>{
        newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("converted to uppercase", "success");
    }
    const handleDownClick = ()=>{
        newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("converted to lowercase", "success");
    }
    const cleartext = ()=>{
        newtext = ''
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} placeholder='enter text here' onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} name="" id="myBox" cols="30" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
            <button disabled={text.length===0} className='btn btn-secondary mx-3 my-1' onClick={handleDownClick}>convert to lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={cleartext}>clear text</button>

        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"nothing to preview"}</p>
        </div>
        </>
    ) 
}
