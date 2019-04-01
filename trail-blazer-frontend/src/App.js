import React, { Component } from 'react';
import logo from './logo.svg';
import map from './images/trail-demo-image.jpg';
import './css/application.css';

class App extends Component {
  render() {
    return (
      <div className="primary primary--full-width">
        
      <header className="primary__top-bar">
      
        <a href="/" className="logo">Trail Blazers</a>
    
      </header>

      <main className="primary__main">

        <div className="container-fluid">
          
          <div className="row">

            <div className="col-sm-8 col-sm-push-4 right">
            
              <div className="iframe-rwd">
                <img src={map} className="App-logo" alt="logo" />
              </div>
  
            </div> 
              
            <div className="col-sm-4 col-sm-pull-8 left">
            
              <div className="trail">

                <button type="button" className="btn btn-primary cd-btn js-msg-panel-trigger" data-panel="main">Submit Request to Fix Trail</button>

              </div>

            </div>
            
          </div>

        </div>
        
      </main>

      <footer className="primary__btm-bar">

        <ul className="nav navbar-nav">
          <li>
            <a href="#">
              <i className="fa fa-map"></i>
              Search Trails
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker"></i>
              My Trails
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user"></i>
              My Account
            </a>
          </li>
        </ul>

      </footer>

      <div className="msg-panel msg-panel--from-right js-msg-panel-main">
        <div className="msg-panel__container">
          <div className="msg-panel__content">
            
            <a href="#0" className="msg-panel__close js-cd-close">Close</a>
            
            <h2>Header Level 2</h2>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    
          </div>
        </div> 
      </div>

      </div>
    );
  }
}

export default App;
