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
        persons: [
            { id: Date.now , pr: '' }
        ],
        categories: [
            { id: Date.now , categoryPrice: '' }
        ],
        myOrder : [  { id: Date.now , hotel: '', dateIn : '',dateOut : '', pr: '' ,categoryPrice: '' }  ]
           }

   hotelChangeHandler = (event) => {
       this.myHotel = event.target.value ;
       event.target.className = 'blue'

       this.setState(
            {
                hotels: [
                    { id: Date.now , hotel: this.myHotel },
                ]

            }

        )
   }

    dataInlChangeHandler = (event) => {
        this.myDateI  = event.target.value
        event.target.className = 'blue'

        this.setState(
            {
                datesIn: [
                    { id: Date.now ,  dateIn : this.myDateI }
                ]
            }
        )
    }
    dataOutChangeHandler = (event) => {
        this.myDateO  = event.target.value
        event.target.className = 'blue'

        this.setState(
            {
                datesOut: [
                    { id: Date.now ,  dateOut : this.myDateO }
                ]
            }
        )
    }
    personsChangeHandler = (event) => {
        this.persons  = event.target.value
        event.target.className = 'blue'

        this.setState(
            {
                datesOut: [
                    { id: Date.now ,   pr: this.persons }
                ]
            }
        )
    }
    categoryChangeHandler = (event) => {
        this.category  = event.target.value
        event.target.className = 'blue'

        this.setState(
            {
                categories: [
                    { id: Date.now ,  categoryPrice : this.category }
                ]
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.hotels[0].hotel.length === 0) {
            return;
        }
        const newItem = {
             hotel: this.myHotel , dateIn : this.myDateI, dateOut :this.myDateO   , pr: this.persons ,categoryPrice: this.category,
            id: Date.now()
        };
        this.setState(state => ({
         myOrder : state.myOrder.concat(newItem),

        }));
    }





    render() {
    return (
    <div className="App">
        <div className="container">
  <h1>Book Now</h1>
        <h2>Apartments</h2>
        <h4>A home away from home; choose the apartment that appeals to you the most</h4>
        <div className= 'formWrap' >
            <form action="#">
                <InputHotel changed = {this.hotelChangeHandler} />
                <InputDateIn changedD = {this.dataInlChangeHandler}  />
                <InputDateOut changedO = {this.dataOutChangeHandler} />
                <InputPersons  changedP = {this.personsChangeHandler}/>
                <InputPrice   changedCat = {this.categoryChangeHandler}  />
            </form>
            <button type="submit" id="submit" onClick={this.handleSubmit.bind(this)}>submit</button>


        </div>
            <div className="submited">
                { this.state.myOrder.map( order => {
                    return (                 <Order hotel =  {order.hotel}
                                                    datein = {order.dateIn}
                                                    dateout = {order.dateOut}
                                                    person =   {order.pr}
                                                    categ   =  {order.categoryPrice}
                                                    key = {order.id}   />


                    )
                }) }
                <button type="submit" id="cancel">cancel</button>
            </div>
            {/*<button type="submit" id="confirm" >confirm</button>*/}

        </div>
    </div>
  );
}
}
export default App;
