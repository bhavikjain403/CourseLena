import React from 'react';
import { Link } from 'react-router-dom';
import LogoCube from './Cube';

export default function HomePage() {

        return (
          <div>
            <div className="container">
              <div className="row">
                  <div className='col-12 col-md-6' style={{marginTop:"15%",marginBottom:"10%",paddingRight:"10%"}}><LogoCube/></div>
                  <div className='col-12 col-md-6' style={{marginTop:"15%",marginBottom:"10%",alignSelf:"center",color:"snow",paddingLeft:"5%"}}>
                    <h2>Want to learn Development?</h2><br/><br/><h3>You are at the right place.</h3>
                    <br/><br/><h4>CourseLena.com provides a variety of courses to kickstart your development career.</h4>
                    </div>
              </div>
            </div>
          </div>
        );
}