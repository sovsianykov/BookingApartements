import React from "react";

function BookingItem({booklist}) {
    return (
        <li className="bookingitem col-8">
            <textarea name="text" id="$t" cols="30" rows="2" defaultValue={booklist.hotel
            +" " +  booklist.people +"persons"+
            " " + booklist.price + '$' +"per day"  }>

            </textarea>

        </li>
    )

}
export default BookingItem;