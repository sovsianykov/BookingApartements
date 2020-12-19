import React from "react";
import InputCity from "./InputCity";
import InputDateIn from "./InputDateIn";
import InputDateOut from "./InputDateOut";
import InputPersons from "./InputPersons";
import InputPrice from "./InputPrice";
import BoookingList from "./BoookingList";




 function  Container() {
  let bookLists = [
      {id:1 , completed : 'false', hotel: 'Plaza' , people : "4" , price: 400 },
      {id:2 , completed : 'false', hotel: 'Premier' , people : "3" , price: 400 },
      {id:3 , completed : 'false', hotel: 'Intercontinental' , people : "6" , price: 400 }
  ]

       const cityList = { val: 'input City Name',val1: 'New York', val2: 'Kyiv',val3: 'Paris'  }

     return  (

        <div className ="container">
            <h2>Apartments</h2>
            <h4>A home away from home; choose the apartment that appeals to you the most</h4>
            <div className ="formWrap">
               <form action="#">
                     <InputCity cityList = {cityList}  />
                     <InputDateIn/>
                     <InputDateOut/>
                     <InputPersons/>
                     <InputPrice/>
               </form>
                <button type="submit" id="submit">submit</button>

            </div>
            <button type="submit" id="confirm">confirm</button>
            <button type="submit" id="cancel">cancel</button>
            <BoookingList booklists={bookLists}/>
        </div>


    )
}

export default Container;

