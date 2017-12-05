import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Link } from 'react-router-dom';
import ConfirmBooking from './ConfirmBooking'; 
import {OverlayTrigger, Tooltip, Popover,Button,Modal} from 'react-bootstrap';


class Filterbar extends Component{
    
  state = {
    selectedOption: null,
    value: null
  }
  handleChange = (selectedOption) => {
    this.setState({ 
        value  : selectedOption.value 
    });
    this.props.onSelect(selectedOption.value);
  }
  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.value}
        placeholder = "Select Location..."
        onChange={this.handleChange}
        options={[
          { value: 0, label: 'PowerPlay 1 (Near RxDx)' },
          { value: 1, label: 'PowerPlay 2 (Behind SAP)' },
        ]}
      />
    );
  }
} 

export default Filterbar;