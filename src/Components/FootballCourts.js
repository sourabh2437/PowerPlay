import React, { Component } from 'react';
import AppHeader from './AppHeader';
import courts from '../testData.json';
import CourtPreview from './CourtPreview';


class FootballCourts extends Component {
    
    state = {
        pageHeader: 'Football',
        pageDesc:'Come on footballers!!!'
    };
    
    render() {
    return (
        
        
        <div>
        
            <AppHeader header ={this.state.pageHeader} 
                 desc ={this.state.pageDesc} />

            <div className="row" >
                {courts.badminton.map(court =>
                  <CourtPreview key={court.id} {...court} />
                )}
            </div>

        </div>
    );
  }
}

export default FootballCourts;
