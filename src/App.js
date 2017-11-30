import React, { Component } from 'react';
import './App.css';
import FootballCourts from './Components/FootballCourts'
import BadmintonCourts from './Components/BadmintonCourts'
import AppHeader from './Components/AppHeader'
import SportTile from './Components/SportTile'
class App extends Component {
    
    state = {
        pageHeader: 'Available Sports',
        pageDesc:'Just play. Have fun. Enjoy the game.'
    };
    
    fetchSport = (sid) =>{
        
        this.setState({
           sportId: sid,
           pageHeader: sid===2?"Football":"Badminton",
           pageDesc : sid===2?"Football":"Badminton"
        });
    };

    handleCurrentContent(){
        if(this.state.sportId===1){
           return  (<BadmintonCourts/>);
        }else if(this.state.sportId===2){
            return (<FootballCourts/>);
        }else{
            return (<SportTile onSportTileClick={this.fetchSport}  />);
        }
        
    }
    
    
    render() {
    return (
      <div className="App">
        
        <div className="container">
               
                <AppHeader header ={this.state.pageHeader} 
                             desc ={this.state.pageDesc}/>
                        
                
                {this.handleCurrentContent()}
                
        
            </div>
        
      </div>
    );
  }
}

export default App;
