import React from "react";

const styles = {
    book : {
              color: '#CBDDE1',
              fontSize: '1.5rem',
               lineHeight : ' .7rem',
               paddingTop : '.5rem',
              fontFamily :`'Roboto ',sans-serif`

         }
          }



function Order (props) {
    return (
        <div className="bookingitem "  >
            <h4>
               <span  style={styles.book}>{props.hotel} </span> &nbsp;  hotel &nbsp; ordered from &nbsp;
                 <span style={styles.book}>  {props.datein}
            </span> &nbsp; to &nbsp; <span style={styles.book}>{props.dateout}</span>
            </h4>

        </div>
    )

}
export default Order;