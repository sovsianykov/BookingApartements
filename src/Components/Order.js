import React from "react";
import Context from "../context";

const styles = {
    book : {
              color: '#CBDDE1',
              fontSize: '1.5rem',
               lineHeight : ' .7rem',
               paddingTop : '.5rem',
               fontWeight : '400',
              fontFamily :`'Roboto ',sans-serif`
         },
       cross : {
        position: 'absolute',
           right: '0',
         // border: '1px solid red',
           fontSize: '.7rem',
           display : 'inline-block',
           marginLeft : 'auto'
       }

          }



function Order (props) {

    let section = document.getElementsByClassName('bookingitem')

    section.className = 'show'

    function  toggleClasses() {
        console.log('delete')
        let section = document.getElementsByClassName('bookingitem')

        section[section.length -1].className = 'hide'
        console.log(section)


    }




    return (
  <Context.Provider value = {{

  }}>


      <div className="bookingitem  "  >
          <h4 >

              <strong>{props.index}</strong>.  &nbsp; <span  style={styles.book}>{props.hotel} </span> &nbsp;  hotel &nbsp; ordered from &nbsp;
              <span style={styles.book}>  {props.datein}
            </span> &nbsp; to &nbsp; <span style={styles.book}>{props.dateout}</span>
              &nbsp; . Stateroom category - <span  style={styles.book}>{props.categ}</span> .&nbsp;
              Number of persons - <span  style={styles.book}>{props.person}</span>
              <a style={styles.cross} href="#" onClick={toggleClasses}>&#x274C;</a>

          </h4>
      </div>
  </Context.Provider>

    )

}


export default Order;