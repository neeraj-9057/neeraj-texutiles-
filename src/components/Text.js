
import React, {useState} from 'react'

export default function Text(props) {
     
    const changeToUpper = ()=>{
        setText(text.toUpperCase())
        props.showAlert("success", "converted to uppercase")
    }
    
    const changeToLower = ()=>{
        setText(text.toLowerCase())
        props.showAlert("success", "converted to lowercase")
    }
    
    const removeText = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("success", "removed all text ")
    }

    const removeExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join("  "))
        props.showAlert("success", "removed all extra space")
    }

    const reverseString = () => {
        setText(text.split("").reverse().join(""));
        props.showAlert("success", "string has been reversed")
    };

    const copyString = ()=>{
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied to clipboard!");
        }, () => {
            alert("Failed to copy text.");
        });
        props.showAlert("success", "string coped")
    }

    const handelOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState(" ");
    return (
        <>
        <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==="dark"?"gray":"white", color: props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} type="button" onClick={changeToUpper} className="btn btn-primary mx-1 my-1">uppercase</button>
            <button disabled = {text.length===0} type="button" onClick={changeToLower} className="btn btn-primary mx-1 my-1">lowercase</button>
            <button disabled = {text.length===0} type="button" onClick={removeText} className="btn btn-primary mx-1 my-1">remove all</button>
            <button disabled = {text.length===0} type="button" onClick={removeExtraSpace} className="btn btn-primary mx-1 my-1">remove extra space</button>
            <button disabled = {text.length===0} type="button" onClick={reverseString} className="btn btn-primary mx-1 my-1">reverse string</button>
            <button disabled = {text.length===0} type="button" onClick={copyString} className="btn btn-primary mx-1 my-1">copy string</button>

        </div>
        <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>your text summary</h1>
            <p>number of word is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} & number of carecter is {text.length} </p>
            <p>read time is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
            <h3>priview</h3>
            <p>{text.length>0?text:"noting to priview"}</p>
        </div>
        </>
    )
}

