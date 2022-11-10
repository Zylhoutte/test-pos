import React from "react";
import ReactToPrint from "react-to-print";
import Todoinput from "../components/TodoInput"


class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className='print-source'>
        <div id="invoice-POS">
       <center id="top">
       <div class="logo"></div>
       <div class="info">
       <h2>Micro Union</h2>
       </div>
       </center>
       <div id="mid">
        <div class="Info">
            <h2>Contact Info</h2>
            <p>
                Address: Zamboanga City 
                <br />
                Email: test@example.com
                <br />
                Phone: +63-000-101-1011
                <br />
                
            </p>
        </div>
       </div>

        <div id="bot">
            <div id="table">
                <table>
                                     
                </table>

            </div>
        </div>

        </div>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print Reciept</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
