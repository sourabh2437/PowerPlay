import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class AppHeader extends Component {
    render() {
    return (
      <div className="row row-bottom-padded-md">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h2 className="fh5co-lead animate-box">{this.props.header}</h2>
                        <p className="fh5co-sub-lead animate-box"> {this.props.desc}</p>
                    </div>
                </div>
    );
  }
}

export default AppHeader;