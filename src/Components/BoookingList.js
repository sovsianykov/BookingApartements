import React from "react";
import BookingItem from "./BookingItem";
import TotalPrice from "./TotalPrice";
const styles = {
    ul: {
        listStyle : 'none',
        width : '500px',
        display: 'inline-block',
        // position : 'relative',
        // left: '850px',
        // top: '-100px',
        fontSize: '24px'

        }

}




function BookingList(props) {
    return (
        <ul className="bookinglist row" style={styles.ul}>
            {props.booklists.map( booklist => {
                return <BookingItem booklist={booklist} key={booklist.id}/>
            })}


            <TotalPrice/>
        </ul>
    )
    
}
export default BookingList;