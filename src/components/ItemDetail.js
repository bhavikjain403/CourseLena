import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardFooter, CardHeader } from 'reactstrap';

class ItemDetail extends Component {
    renderItem(item) {
        if (item != null) {
            return (
                <Card style={{"borderRadius":"0px", "height":"750px"}}>
                  <CardHeader style={{"color":"snow","background":"navy"}}>
                      <CardTitle style={{"paddingTop":"5%", "textAlign":"center"}}><h3>{item.name}</h3></CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardImg src={item.image} alt={item.name} style={{"borderRadius":"50px"}}/>
                    <div style={{"paddingTop":"10%"}}>
                        <button style={{"border": "none","border-radius": "10px", "background":"black", "color":"snow"}} disabled="disabled"><p style={{"fontSize":"120%"}}>Rs. {item.price}</p></button>&ensp;&ensp;
                        <button style={{"border": "none","border-radius": "10px", "background":"red", "color":"snow"}} disabled="disabled"><p style={{"fontSize":"120%"}}>4 Months Validity</p></button>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <CardText style={{"marginBottom":"52%"}}><h4>Description:</h4><b>{item.description}</b></CardText>
                  </CardFooter>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    renderForm(item) {
        if (item != null) {
            return (
                <Card style={{"border":"0","borderRadius":"0px", "height":"750px"}}>
                    <div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-11 offset-1 offset-md-0 col-md-2'><b>Name:</b></label>
                        <input className='col-4 offset-1 offset-md-0 col-md-4' type="text" placeholder="Last Name"></input>
                        <input className='col-4 offset-1 offset-md-1 col-md-4' type="text" placeholder="First Name"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-11 offset-1 offset-md-0 col-md-2'><b>Email:</b></label>
                        <input className='col-8 offset-1 offset-md-0 col-md-9' type="email" placeholder="Email"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-11 offset-1 offset-md-0 col-md-3'><b>Contact:</b></label>
                        <input className='col-8 offset-1 offset-md-0 col-md-8' type="tel" placeholder="Contact Number" maxLength="10"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-11 offset-1 offset-md-0 col-md-4'><b>Date of Birth:</b></label>
                        <input className='col-8 offset-1 offset-md-0 col-md-7' type="date"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <p className='offset-1 offset-md-0'><b>Course Name : <text style={{"color":"red"}}>{item.name}</text></b></p>
                    </div>
                    <div className='row'>
                        <p className='offset-1 offset-md-0'><b>Course Price : <text style={{"color":"red"}}>Rs. {item.price}</text></b></p>
                    </div>
                    <h3 className='offset-1 offset-md-0' style={{"paddingTop":"5%"}}>Payment Details:</h3>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-11 offset-1 offset-md-0 col-md-5'><b>CardHolder Name:</b></label>
                        <input className='col-8 offset-1 offset-md-0 col-md-6' type="text" placeholder="CardHolder Name"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-11 offset-1 offset-md-0 col-md-12'><b>Card Number:</b></label>
                    </div>
                    <div className='row' style={{"paddingTop":"0.5%"}}>
                        <input className='col-2' style={{"marginLeft":"3%"}} type="text" maxLength="4"></input>-
                        <input className='col-2' type="text" maxLength="4"></input>-
                        <input className='col-2' type="text" maxLength="4"></input>-
                        <input className='col-2' type="text" maxLength="4"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-4 offset-1 offset-md-0 col-md-3'><b>CVV:</b></label>
                        <input className='col-2' type="text" placeholder="CVV" maxLength="3"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"5%"}}>
                        <label className='col-3 offset-1 offset-md-0 col-md-3'><b>Expiry Date:</b></label>
                        <input className='col-3 offset-1 offset-md-0 col-md-3' type="number" placeholder="Month" min="01" max="12"></input>-
                        <input className='col-3 col-md-3' type="number" placeholder="Year"></input>
                    </div>
                    <div className='row' style={{"paddingTop":"12%", "paddingBottom":"9%"}}>
                        <a href='/'><button className='col-5 offset-3' id = "buy" style={{"backgroundColor":"red","color":"snow","borderRadius":"5px"}} onClick={function(){document.querySelector("#buy").style.backgroundColor="green"; alert("Thank you for the payment");document.removeChild(document.querySelector("div"));}}>Proceed to pay Rs. {item.price}</button></a>
                    </div>
                    </div>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render(){
        let item = this.props.item
        
        if (item == null) {
            return (<div></div>);
        }

        const itemInfo = this.renderItem(this.props.item);
        const itemForm = this.renderForm(this.props.item);
        return (
            <div id="myCart" style={{paddingBottom:"10%"}}>
                <div className='row'>
                <h1 style={{"textAlign":"center","paddingTop":"2%", "paddingBottom":"2%", "margin":"0", "background":"ivory"}}>Buy Now</h1>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 g-md-0'>
                        {itemInfo}
                    </div>
                    <div className='col-12 col-md-6 g-md-0'>
                        {itemForm}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetail;