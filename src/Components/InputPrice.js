import React from "react";


function InputPrice(props) {
    return (
    <select id="Category" name="Category" onChange={props.changedCat.bind(this)}>
        <option value="select category">select category</option>
        <option value="lux">Lux</option>
        <option value="Buisness">Buisness</option>
        <option value="Econom">Econom</option>
        <option value="Students">Students</option>
    </select>


    )
}
export default InputPrice;