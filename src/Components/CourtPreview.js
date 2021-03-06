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
        
        <div className="col-md-3 col-sm-3 col-xxs-6" align="center">
            <div className="fh5co-project-item">
                <img src={this.props.image} alt="" className="img-responsive" />
                <div className="fh5co-text">
                    <p>Court - {this.props.courtNumber}</p>
                    <div className="row">
                        <div className="col-sm-6">
                            <kbd>₹ {this.props.price}</kbd>
                        </div>
                    <div className="col-sm-6">
                    <Button float="right" bsStyle="primary" onClick={this.open}>Book</Button>
                        </div>
                    </div>
                    
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id="modelTitle"componentClass="h2">Confirm Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modelDesc" bsSize="large">
            Confirm Badminton Court no. {this.props.courtNumber} on 05/12/17 from {this.props.sLabel}
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
