import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FootballCourts from './FootballCourts'
import BadmintonCourts from './BadmintonCourts'
class SportTile extends Component {
    
    componentDidMount(){
            console.log("SportTile came");
        }  
    onFootballTileClick = ()=>{
        this.props.onSportTileClick(2);
    };
    onBadmintonTileClick = ()=>{
        this.props.onSportTileClick(1);
    };
    
    render() {
    return (
                    
         <Router>
                    <div className="row">
        
                        <div id="1" className="col-md-6 col-sm-6 col-xxs-12 animate-box" onClick={this.onBadmintonTileClick}>
                            <Link   to={'/badminton'} className="fh5co-project-item">
                                <img src="images/Bicon.jpg" alt="Image" className="img-responsive" />
                                <div className="fh5co-text">
                                    <h2>Badminton</h2>
                                    <p>I love badminton. That's my sport!</p>
                                </div>
                            </Link>
                        </div>

                        <div id="2" className="col-md-6 col-sm-6 col-xxs-12 animate-box" onClick={this.onFootballTileClick}>
                            <Link to={'/football'} className="fh5co-project-item">
                                <img src="images/Ficon.jpg" alt="Image" className="img-responsive" />
                                <div className="fh5co-text">
                                    <h2>Football</h2>
                                    <p>I love football. That's my sport!</p>
                                </div>
                            </Link>
                        </div>


                        <Switch>
                          <Route exact path='/badminton' component={BadmintonCourts} />
                          <Route exact path='/football' component={FootballCourts} />
                        </Switch>

                    </div>
                </Router>       

    );
  }
}

export default SportTile;