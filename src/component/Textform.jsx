import { useCallback, useRef, useState } from "react"

function Textform(props) {
    const [text, setText] = useState("Enter text here ")
    const textAr = useRef(null);

    const handleUpClick = () => {
            // console.log("clicked" + text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase", "success")

    }
    const handleLowerClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success")
    }

    const handleCopyClick = useCallback(() => {
            textAr.current?.select();
            window.navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard", "success")

    },[text])

    const handleClearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Cleared text", "success")

}
    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space Removed", "success")
    }

    const handleOnChange = (e) => {
        // console.log("on change");
        setText(e.target.value);
    } 
    
    const btnClass = "btn btn-info text-black mx-1 my-2 cursor-pointer"

    return (
      <>

<div>
       <div className="container" style={{color: props.mode == 'dark'? 'white': 'black'}} >
            <h1 className="my-4">Convert Your Text {":)"}  </h1>
            <div className="mb-3">
            <textarea  
            ref={textAr}
            onChange = {handleOnChange} 
            value = {text} 
            className={`form-control bg-${props.mode} text-${props.mode == 'dark'? 'light': 'dark'}
             fs-5 mt-4`} 
             rows="4"
            //  onClick={props.toggleMode}
             style={{backgroundColor : props.mode === 'dark'? "grey" : '', color : props.mode === 'light'? "dark" : 'light'}}
             >

            
             </textarea>
            <button disabled={text.length===0} onClick={handleUpClick}  className={btnClass} >Convert to Uppercase</button>
            <button disabled={text.length===0} onClick={handleLowerClick}  className={btnClass} >Convert to LowerCase</button>
            <button disabled={text.length===0} onClick={handleCopyClick}  className={btnClass} >Copy to Text</button>
            <button disabled={text.length===0} onClick={handleClearClick}  className={btnClass} >Clear Text</button>
            <button disabled={text.length===0} onClick={handleExtraSpace}  className={btnClass} >Remove Extra Space</button>
            </div>
        </div>
        <div className="container" style={{color : props.mode === 'light'? "dark" : 'light'}} >
          <hr />
          <h2 className="text-success">Your text Sumarry: </h2>
          <p className="text-secondary mx-3" >{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters!</p>
          <p className="text-secondary mx-3">{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes to Read this!</p>
        {/* <hr /> */}
        </div>
        <div className="container my-4 ">
          <h3 className="text-success ">Preview : </h3>
          <p className= " fs-5 mx-3" style={{color: props.mode == 'dark'? 'white': 'black'}} >{text.length > 0? text : "Nothing to Preview here.."}</p>
        </div>

</div>
   
   </>
  )
}

export default Textform
