import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ConfirmBooking from './ConfirmBooking'; 
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {OverlayTrigger, Tooltip, Popover} from 'react-bootstrap';


class CourtPreview extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            showModal: false 
    }; 
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    
    }
  close()  {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };
    render() {
    return (
        
        <div className="col-md-6 col-sm-6 col-xxs-12">
            <div className="fh5co-project-item">
                <img src="images/Bicon.jpg" alt="" className="img-responsive" />
                <div className="fh5co-text">
                    <h2>{this.props.courtName}</h2>
                    <p>{this.props.courtLocation}</p>
                    <Button bsStyle="primary" onClick={this.open}>Book</Button>
        
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id="modelTitle"componentClass="h2">Confirm Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modelDesc" bsSize="large">
            Confirm Badminton Court no. 3 on 05/12/17 from 5PM - 6PM
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.close}>Confirm Booking</Button>
            <Button bsStyle="danger" onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
                </div>
            </div>  
        </div>
    );
  }
}

export default CourtPreview;
