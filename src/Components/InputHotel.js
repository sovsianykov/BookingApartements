import React from "react";


function InputHotel(props) {
    return (
     <div>
        <input type="text" placeholder="input Hotel" onChange={props.changed.bind(this)}/>

     </div>



)
}


export default InputHotel;