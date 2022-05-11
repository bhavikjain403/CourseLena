import * as React from 'react';
import "../Cube.css"

class LogoCube extends React.Component {
  render() {
    return (
      <div class="cube">
      <div class="face one"><img src='assets/images/HTML.png' style={{width: '200px', height: '200px',border:"solid 5px",borderColor:"navy"}}></img></div>
      <div class="face two"><img src='assets/images/mongodb.jpg' style={{width: '200px', height: '200px',border:"solid 5px",borderColor:"navy"}}></img></div>
      <div class="face three"><img src='assets/images/bootstrap.jpg' style={{width: '200px', height: '200px',border:"solid 5px",borderColor:"navy"}}></img></div>
      <div class="face four"><img src='assets/images/react.png' style={{width: '200px', height: '200px',border:"solid 5px",borderColor:"navy"}}></img></div>
      <div class="face five"><img src='assets/images/nodejs.png' style={{width: '200px', height: '200px',border:"solid 5px",borderColor:"navy"}}></img></div>
      <div class="face six"><img src='assets/images/git.png' style={{width: '200px', height: '200px',border:"solid 5px",borderColor:"navy"}}></img></div>
  </div>
    );
  }
}
export default LogoCube