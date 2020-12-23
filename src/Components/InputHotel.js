import React from "react";


function InputHotel(props) {
    return (
     <div>
         <select id="hotel" name="hotel" onChange={props.changed.bind(this)}>
             <option value="select hotel">select hotel</option>
             <option value="Intercontinental">Intercontinental</option>
             <option value="Golden Mall">Golden Mall</option>
             <option value="Hilton">Hilton</option>
         </select>
        {/*<input type="text" placeholder="input Hotel" onChange={props.changed.bind(this)}/>*/}

     </div>



)
}


export default InputHotel;