import React from "react";
import BookingItem from "./BookingItem";
import TotalPrice from "./TotalPrice";
const styles = {
    ul: {
        listStyle : 'none',
        width : '260px',
        display: 'inline-block',
        // position : 'relative',
        // left: '850px',
        // top: '-100px',
        fontSize: '24px'

        }

}




function BookingList() {
    return (
        <ul className="bookinglist row" style={styles.ul}>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <TotalPrice/>
        </ul>
    )
    
}
export default BookingList;