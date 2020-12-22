import './App.css';

import React ,{Component} from "react";
import InputHotel from "./Components/InputHotel";
import InputDateIn from "./Components/InputDateIn";
import InputDateOut from "./Components/InputDateOut";
import InputPersons from "./Components/InputPersons";
import InputPrice from "./Components/InputPrice";
import Order from "./Components/Order";

class  App extends Component {
    state = {
        hotels: [
            { id: Date.now , hotel: '' }
            ],
        datesIn: [
            { id: Date.now , dateIn: '' }
        ],
        datesOut: [
            { id: Date.now , dateOut: '' }
        ],
        categories: [
            { id: Date.now , categoryPrice: '' }
        ]

           }
        myOrder = { id:1, hotel: 'Plaza', dateIn : '12-12-2020',dateOut : '12-14-2020', pr: '2', price:'400' } ;
   hotelChangeHandler = (event) => {
       this.myHotel = event.target.value.toUpperCase() ;

       this.setState(
            {
                hotels: [
                    { id: Date.now , hotel: this.myHotel },
                ] ,
                message : ''

            }

        )
   }

    dataInlChangeHandler = (event) => {
        let myDate  = event.target.value
        this.setState(
            {
                datesIn: [
                    { id: Date.now ,  dateIn : myDate }
                ]
            }
        )
    }
    dataOutChangeHandler = (event) => {
        let myDate  = event.target.value
        this.setState(
            {
                datesOut: [
                    { id: Date.now ,  dateOut : myDate }
                ]
            }
        )
    }
    categoryChangeHandler = (event) => {
        let category  = event.target.value
        this.setState(
            {
                categories: [
                    { id: Date.now ,  categoryPrice : category }
                ]
            }
        )
    }

    render() {
    return (
    <div className="App">
        <div className="container">
  <h1>Book Now</h1>
        <h2>Apartments</h2>
        <h4>A home away from home; choose the apartment that appeals to you the most</h4>
        <div className ="formWrap">
            <form action="#">
                <InputHotel changed = {this.hotelChangeHandler} />
                <InputDateIn changedD = {this.dataInlChangeHandler}  />
                <InputDateOut changedO = {this.dataOutChangeHandler} />
                <InputPersons  changedP = {this.dataOutChangeHandler}/>
                <InputPrice   changedCat = {this.categoryChangeHandler}                                        />
            </form>
            <button type="submit" id="submit">submit</button>


        </div>
            <Order hotel =  {this.state.hotels[0].hotel}
                   datein = {this.state.datesIn[0].dateIn}
                   dateout = {this.state.datesOut[0].dateOut}
                   categ   =  {this.state.categories[0].categoryPrice}
            />
            <button type="submit" id="confirm" >confirm</button>
            <button type="submit" id="cancel">cancel</button>
        </div>
    </div>
  );
}
}
export default App;
