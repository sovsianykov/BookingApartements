import React from "react";
import InputCity from "./InputCity";
import InputDateIn from "./InputDateIn";
import InputDateOut from "./InputDateOut";
import InputPersons from "./InputPersons";
import InputPrice from "./InputPrice";




 function  Container() {
    return  (
        <div className="container">
            <h2>Apartments</h2>
            <h4>A home away from home; choose the apartment that appeals to you the most</h4>
            <div className ="formWrap">
               <form action="#">
                     <InputCity/>
                     <InputDateIn/>
                     <InputDateOut/>
                     <InputPersons/>
                     <InputPrice/>
               </form>
                <button type="submit" id="submit">submit</button>
            </div>
            <button type="submit" id="confirm">confirm</button>
            <button type="submit" id="cancel">cancel</button>
        </div>


    )
}

export default Container;

