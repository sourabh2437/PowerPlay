import React, { Component } from 'react';
import './App.css';
import FootballCourts from './Components/FootballCourts'
import BadmintonCourts from './Components/BadmintonCourts'
import SportTile from './Components/SportTile'
import { Switch, Route } from 'react-router-dom';



class App extends Component {
    
    state = {
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
                
                <Switch>
                    <Route exact path='/' component={SportTile} />  
                    <Route path='/badminton' component={BadmintonCourts} />
                    <Route path='/football' component={FootballCourts} />
                </Switch>

            </div>
               
        </div>
        
    );
  }
}

export default App;
