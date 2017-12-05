import React, { Component } from 'react';
import data from '../testData.json';
import CourtPreview from './CourtPreview';
import AppHeader from './AppHeader';
import Filterbar from './FilterBar';

class BadmintonCourts extends Component {
    
    state = {
        pageHeader: 'Badminton',
        pageDesc:'Come on Shuttlers!!!',
        location: 0
    };
    handleSelect = (value) => {
    this.setState({ location  : value });
  }
    render() {
    return (
        
            <div>
            <div className="row">
                <AppHeader header ={this.state.pageHeader} 
                     desc ={this.state.pageDesc} /></div>
             <div className="row" id="appRow"> 
        <div className="col-sm-4"><label>Select Location</label><Filterbar onSelect={this.handleSelect}/></div>
        <div className="col-sm-4"><label>Select Date</label><Filterbar/></div>
        <div className="col-sm-4"><label>Select Slot</label><Filterbar/></div>
        </div>
                <div className="row" >
                    {data.badminton.location[this.state.location].map(itr =>
                      <CourtPreview key={itr.id} {...itr} />
                    )}
                </div>
        
            </div>

        
    );
  }
}

export default BadmintonCourts;
