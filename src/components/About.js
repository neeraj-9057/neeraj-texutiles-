import React  from 'react'

export default function About(props) {

   let myStyle = {
    color: props.mode==="dark"?"white":"black",
    backgroundColor: props.mode==="dark"?"gray":"white"
   }

  return (
    <div className='container' style={myStyle}>
        <h1>about Us</h1>
      <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" >
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    analize your text 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    tou can analise your text here with multiple senerios like how many work and how many carecters is in your text and how much time is required to read the text and also apply multiple filters like uppercase, lowercase, reverse text , remove text, remove extra space, copy text
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" >
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    free to use 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    this application is free to use you can use this aapication without paying. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" >
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   browser compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    this application work in any web browser like firefox, chrome, safari, opera etc
                </div>
                </div>
            </div>

</div>
    </div>
  )
}
