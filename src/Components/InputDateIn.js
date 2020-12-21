import React from "react";


function InputDateIn(props) {
    return (
        <input type="date" id="checkin" onChange={props.changedD.bind(this)}/>


    )
}
export default InputDateIn;