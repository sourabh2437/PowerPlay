import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader'


class SportTile extends Component {
    
    state = {
        pageHeader: 'Available Sports',
        pageDesc:'Just play. Have fun. Enjoy the game.'
    };
    
    componentDidMount(){
            console.log("SportTile came");
    }  
//    onFootballTileClick = ()=>{
//        this.props.onSportTileClick(2);
//    };
//    onBadmintonTileClick = ()=>{
//        this.props.onSportTileClick(1);
//    };
    
    render() {
    return (
        
            <div>
        
                <AppHeader header ={this.state.pageHeader} 
                     desc ={this.state.pageDesc} />
        
                <div className="row" >
                    <div id="1" className="col-md-6 col-sm-6 col-xxs-12">
                        <Link to={'/badminton'} className="fh5co-project-item">
                            <img src="images/Bicon.jpg" alt="" className="img-responsive" />
                            <div className="fh5co-text">
                                <h2>Badminton</h2>
                                <p>I love badminton. Thats my sport!</p>
                            </div>
                        </Link>
                    </div>

                    <div id="2" className="col-md-6 col-sm-6 col-xxs-12">
                        <Link to={'/football'} className="fh5co-project-item">
                            <img src="images/Ficon.jpg" alt="" className="img-responsive" />
                            <div className="fh5co-text">
                                <h2>Football</h2>
                                <p>I love football. Thats my sport!</p>
                            </div>
                        </Link>
                    </div>
                </div>
        
            </div>
        

    );
  }
}

export default SportTile;