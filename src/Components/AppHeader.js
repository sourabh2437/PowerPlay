import React, { Component } from 'react';


class AppHeader extends Component {
    render() {
    return (
      <div className="row row-bottom-padded-md">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h2 className="fh5co-lead">{this.props.header}</h2>
                        <p className="fh5co-sub-lead"> {this.props.desc}</p>    
                    </div>
                </div>
    );
  }
}

export default AppHeader;