import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FootballCourts from './Components/FootballCourts'
import BadmintonCourts from './Components/BadmintonCourts'


class App extends Component {
    
    state = {
        pageHeader: 'Naming Contests'
    };
    
    handleSelection(){
        
        
    }
    
    render() {
    return (
      <div className="App">
        
        <div className="container">
               
                <div className="row row-bottom-padded-md">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h2 className="fh5co-lead animate-box">Available Sports</h2>
                        <p className="fh5co-sub-lead animate-box">Just play. Have fun. Enjoy the game. </p>
                    </div>
                </div>
        

                <Router>
                    <div className="row">
        
                        <div className="col-md-6 col-sm-6 col-xxs-12 animate-box" onClick={this.handleSelection()}>
                            <Link to={'/badminton'} className="fh5co-project-item">
                                <img src="images/Bicon.jpg" alt="Image" className="img-responsive" />
                                <div className="fh5co-text">
                                    <h2>Badminton</h2>
                                    <p>I love badminton. That's my sport!</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xxs-12 animate-box" onClick={this.handleSelection()}>
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
        
            </div>
        
      </div>
    );
  }
}

export default App;
