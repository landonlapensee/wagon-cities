import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  handleClick = () => {
    //NEED A REDUX ACTION
    this.props.selectedCity(this.props.city);
  };
  
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

import { selectedCity } from '../actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedCity: selectedCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
