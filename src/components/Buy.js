import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardFooter } from 'reactstrap';
import ItemDetail from './ItemDetail';
import HoverVideoPlayer from 'react-hover-video-player';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        };
    }

    onItemSelect(item) {
        this.setState({selectedItem: item});
    }
    render() {
        const courses = this.props.items.map((item) => {
            return (
              <div key={item.id} className="col-6 col-md-3 mb-5 mt-5">
                <Card style={{"borderRadius":"20px", "height":"350px"}}>
                  <CardTitle style={{"text-align": "center", "fontSize": "30px", "color":"snow", "borderTopLeftRadius":"20px", "borderTopRightRadius":"20px", "background":"#1f2833"}}>{item.name}</CardTitle>
                  <HoverVideoPlayer videoSrc={item.videoURL} muted={false} restartOnPaused overlayTransitionDuration={150} pausedOverlay={<CardImg src={item.image} alt={item.name} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}/>}/>
                  <CardText  style={{"padding-top":"10%", "padding-left":"5%", "padding-right":"5%"}}>
                    <div className='row'>
                      <div className='col-auto col-md-5' style={{"paddingBottom":"2%"}}>
                        <button disabled="disabled" style={{"border": "none","border-radius": "10px", "background":"black", "color":"snow", "height":"37px"}}><b>Rs. {item.price}</b></button>
                      </div>
                      <div className='col-auto col-md-7'>
                        <a href='#myCart'><button type='button' id = "addToCart" onClick={() => {this.onItemSelect(item);}} style={{"border-radius": "5px", "background":"red", "color":"snow", "height":"37px" }}>Buy Now</button></a>
                      </div>
                    </div>
                  </CardText>
                  <CardFooter style={{"color":"black","text-align":"center", "borderBottomLeftRadius":"20px", "borderBottomRightRadius":"20px",background:"snow "}}>{item.description}</CardFooter>
                </Card>
              </div>
            );
        });

        return (
          <div>
          <div>
            <div className="container">
              <div className="row">
                  {courses}
              </div>
              <ItemDetail item={this.state.selectedItem} />
            </div>
          </div>
          </div>
        );
    }
}

export default Buy;