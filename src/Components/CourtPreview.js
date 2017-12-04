import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import ConfirmBooking from './ConfirmBooking'; 
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {OverlayTrigger, Tooltip, Popover} from 'react-bootstrap';


const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);



class CourtPreview extends Component {
    
    constructor(props) {
    super(props);
        this.state = {
      showComponent: false,
        };
    this.onPressBookBtn = this.onPressBookBtn.bind(this);
  }
    
    
    onPressBookBtn()
    {
        this.setState({
            showComponent: true,
            });
        
        ReactDOM.render(modalInstance, document.getElementById('g'));
        
    }
    
    render() {
    return (
        
        <div className="col-md-6 col-sm-6 col-xxs-12">
            <div className="fh5co-project-item">
                <img src="images/Bicon.jpg" alt="" className="img-responsive" />
                <div className="fh5co-text">
                    <h2>{this.props.courtName}</h2>
                    <p>{this.props.courtLocation}</p>
                    <button type="button" className="btn btn-primary" onClick={this.onPressBookBtn} >Book</button>
        
                    <Button bsStyle="primary" onClick={this.onPressBookBtn}>Primary</Button>
                    
                </div>
            </div>
        
            <div id='g'></div>
        {this.state.showComponent ? (<ConfirmBooking />) :  null}
        </div>
        
        
    );
  }
}

export default CourtPreview;
