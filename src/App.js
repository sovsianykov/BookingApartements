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
        orders: [
            { id:1, hotel: 'Plaza', dateIn : '12-12-2020',dateOut : '12-14-2020', pr: '2', price:'400' },
            { id:2, hotel: 'Premier', dateIn : '09-11-2020',dateOut : '09-13-2020', pr: '3', price:'300' },
            { id:3, hotel: 'Hilton', dateIn : '10-02-2020',dateOut : '10-12-2020', pr: '1', price:'400' }
        ]

    }
        myOrder = { id:1, hotel: 'Plaza', dateIn : '12-12-2020',dateOut : '12-14-2020', pr: '2', price:'400' } ;
   hotelChangeHandler = (event) => {
       this.myHotel = event.target.value

       this.setState(
            {
                orders: [
                    { id:1, hotel: this.myHotel, dateIn : "08-11-2020", dateOut : "10-12-2020", pr: event.target.value, price:'400' },
                    { id:2, hotel: 'Premier', dateIn : '09-11-2020',dateOut : '09-13-2020', pr: '3', price:'300' },
                    { id:3, hotel: 'Hilton', dateIn : '10-02-2020',dateOut : '10-12-2020', pr: '1', price:'400' }
                ] ,
                message : ''

            }

        )
   }

    hotelChangeHandler2 = (event) => {
        let myDate  = event.target.value
        this.setState(
            {
                orders: [
                    { id:1, hotel: 'Plaza', dateIn : myDate, dateOut : "10-12-2020", pr: event.target.value, price:'400' },
                    { id:2, hotel: 'Premier', dateIn : '09-11-2020',dateOut : '09-13-2020', pr: '3', price:'300' },
                    { id:3, hotel: 'Hilton', dateIn : '10-02-2020',dateOut : '10-12-2020', pr: '1', price:'400' }
                ]

            }

        )
    }
    changeMessageInput(event) {
       this.setState({
               message: event.target.value
           })
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
                <InputDateIn changedD = {this.hotelChangeHandler2}  />
                <InputDateOut/>
                <InputPersons/>
                <InputPrice/>
            </form>
            <button type="submit" id="submit">submit</button>


        </div>
            <Order hotel =  {this.state.orders[0].hotel} datein = {this.state.orders[0].dateIn}  dateout = {this.state.orders[0].dateOut}  />
            <Order hotel =  {this.state.orders[1].hotel} datein = {this.state.orders[1].dateIn}  dateout = {this.state.orders[1].dateOut}  />
            <Order hotel =  {this.state.orders[2].hotel} datein = {this.state.orders[2].dateIn}  dateout = {this.state.orders[2].dateOut}  />

            <button type="submit" id="confirm" >confirm</button>
            <button type="submit" id="cancel">cancel</button>
            <input
                type="text"
                value={this.state.message}
                onChange={this.changeMessageInput.bind(this)} >
            </input>
            <p>{this.state.message}</p>



        </div>
    </div>
  );
}
}
export default App;
