import React from "react";




 function  Container() {
    return  (
        <div className="container">
            <h2>Apartments</h2>
            <h4>A home away from home; choose the apartment that appeals to you the most</h4>
            <div className ="formWrap">
               <form action="#">
                    <input type="text" id="city" placeholder="city"/>
                    <input type="date" id="checkin" placeholder="checkin"/>
                    <input type="date" id="checkout" placeholder="checkout"/>
                    <input type="txt" id="persons" placeholder="persons"/>
                    <input type="txt" id="price" placeholder="price"/>
               </form>
                <button type="submit" id="submit">submit</button>

            </div>
            <button type="submit" id="confirm">confirm</button>
            <button type="submit" id="cancel">cancel</button>


        </div>


    )
}

export default Container;

