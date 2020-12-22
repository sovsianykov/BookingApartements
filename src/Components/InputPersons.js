import React from "react";


function InputPersons(props) {
    return (
        <input type="txt" id="pr" placeholder="persons" onChange={props.changedP.bind(this)}/>


    )
}
export default InputPersons;