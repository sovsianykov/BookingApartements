import React from "react";


function InputHotel(props) {
    return (
     <div>
        <input type="text" defaultValue="input Hotel" onChange={props.changed}/>

     </div>



)
}


export default InputHotel;