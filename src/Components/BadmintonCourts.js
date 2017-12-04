import React, { Component } from 'react';
import courts from '../testData.json';
import CourtPreview from './CourtPreview';
import AppHeader from './AppHeader';


class BadmintonCourts extends Component {
    
    state = {
        pageHeader: 'Badminton',
        pageDesc:'Come on Shuttlers!!!'
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

export default BadmintonCourts;
