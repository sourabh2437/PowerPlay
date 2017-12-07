import React, { Component } from 'react';
import bookingData from '../data/Booking.json';
import CourtPreview from './CourtPreview';
import AppHeader from './AppHeader';
import Filterbar from './FilterBar';
import SlotFilter from './SlotFilter';

class BadmintonCourts extends Component {
    
    state = {
        pageHeader: 'Badminton',
        pageDesc:'Come on Shuttlers!!!',
        location: 'l1',
        date: 'd1',
        slot: 's1'        
    };


    handleSelect1 = (value) => {
    this.setState({ location  : value });
    }
    
    handleSelect2 = (value) => {
    this.setState({ slot  : value });
    }
    
    
    render() {
        
    var aLocation=this.state.location;
    var aDate=this.state.date;
    var aSlot=this.state.slot;
        
    var aData= bookingData.badminton;
        
    return (
        
            <div>
            <div className="row">
                <AppHeader header ={this.state.pageHeader} 
                     desc ={this.state.pageDesc} /></div>
        
                <div className="row" id="appRow"> 
                    <div className="col-sm-4"><label>Select Location</label><Filterbar onSelect={this.handleSelect1}/></div>
                    <div className="col-sm-4"><label>Select Date</label><SlotFilter onSelect={this.handleSelect2} /></div>
                    <div className="col-sm-4"><label>Select Slot</label><Filterbar/></div>
                </div>
        
                <div className="row" >
                    {aData[aLocation][aDate][aSlot].map(itr =>
                      <CourtPreview image={"images/badminton_tile.jpg"} courtName="A" courtLocation="AB" />
                    )}
                </div>
        
            </div>

        
    );
  }
}

export default BadmintonCourts;
