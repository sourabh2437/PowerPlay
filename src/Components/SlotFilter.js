import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import ConfirmBooking from './ConfirmBooking'; 
import {OverlayTrigger, Tooltip, Popover,Button,Modal} from 'react-bootstrap';

class SlotFilter extends Component{
 state = {
    selectedOption: '',
    value: 's0'
  }

  handleChange = (selectedOption) => {
    this.setState({ 
        value  : selectedOption.value 
    });
      
    this.props.onSelect(selectedOption);
  }

  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.value}
        placeholder = "Select Slot..."
        onChange={this.handleChange}
        options={[
          { value: 's0', label: '12:00 PM - 1:00 PM' },
          { value: 's1', label: '1:00 PM - 2:00 PM' },
          { value: 's2', label: '2:00 PM - 3:00 PM' },
        { value:'s3', label: '3:00 PM - 4:00 PM' },
        { value: 's4', label: '4:00 PM - 5:00 PM' },
        { value: 's5', label: '5:00 PM - 6:00 PM' },
        { value: 's6', label: '6:00 PM - 7:00 PM' },
        ]}
      />
    );
  }
} 

export default SlotFilter;
