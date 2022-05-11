import * as React from 'react';
import Cube from 'react-3d-cube';

class LogoCube extends React.Component {
  render() {
    return (
      <div>
        <center>
            <div
            style={{
                width: 400,
                height: 300
            }}
            >
            <Cube size={300} index="front">
                <div><img src='assets/images/mongodb.jpg' style={{width: '300px', height: '300px',border:"solid 5px",borderColor:"navy"}}></img></div>
                <div><img src='assets/images/HTML.png' style={{width: '300px', height: '300px',border:"solid 5px",borderColor:"navy"}}></img></div>
                <div><img src='assets/images/bootstrap.jpg' style={{width: '300px', height: '300px',border:"solid 5px",borderColor:"navy"}}></img></div>
                <div><img src='assets/images/git.png' style={{width: '300px', height: '300px',border:"solid 5px",borderColor:"navy"}}></img></div>
                <div><img src='assets/images/react.png' style={{width: '300px', height: '300px',border:"solid 5px",borderColor:"navy"}}></img></div>
                <div><img src='assets/images/nodejs.png' style={{width: '300px', height: '300px',border:"solid 5px",borderColor:"navy"}}></img></div>
            </Cube>
            </div>
        </center>
      </div>
    );
  }
}
export default LogoCube