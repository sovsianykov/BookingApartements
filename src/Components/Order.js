import React from "react";

const styles = {
    book : {
              color: '#CBDDE1',
              fontSize: '1.5rem',
              fontFamily :'Georgia'

         }
          }



function Order (props) {
    return (
        <div className="bookingitem "  >
            <h4>
               <span  style={styles.book}>{props.hotel}</span> hotel ordered from
                 <span style={styles.book}>  {props.datein}
            </span> to <span style={styles.book}>{props.dateout}</span>
            </h4>

        </div>
    )

}
export default Order;