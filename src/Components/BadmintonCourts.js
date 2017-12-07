import React, { Component } from 'react';
import bookingData from '../data/Booking.json';
import locationData from '../data/Location.json';
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
        slot: 's1',
        slotLabel : ''
    };


    handleSelect1 = (value) => {
    this.setState({ location  : value });
    }
    
    handleSelect2 = (selectedOption) => {
    this.setState({ slot  : selectedOption.value,
                    slotLabel :selectedOption.label});
    }
    
    
    render() {
        
    var aLocation=this.state.location;
    var aDate=this.state.date;
    var aSlot=this.state.slot;
        
    var aData= bookingData.badminton;
    var aSlots = aData[aLocation][aDate][aSlot];
    var availableCourts = [];
    for(var i=0;i<aSlots.length;i++){
        if(aSlots[i]===0){
            availableCourts.push(i);
        }
    }
        
    var aPrice= locationData[aLocation]['properties']['Badminton']['Price'][aSlot];
        
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
                    {availableCourts.map(itr =>
                      <CourtPreview image={"images/badminton_tile.jpg"} courtLocation="AB" price={aPrice} courtNumber={itr+1} sLabel={this.state.slotLabel} />
                    )}
                </div>
        
            </div>

        
    );
  }
}

export default BadmintonCourts;
