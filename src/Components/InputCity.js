import React from "react";


function InputCity({cityList}) {
    return (
     <div>
         <input type="text" defaultValue={cityList.val}/>

     </div>



)
}


export default InputCity;