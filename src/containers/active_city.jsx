import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectCity } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class ActiveCity extends Component {
  
  render() {
    
    if (this.props.city === null) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }
    const url =  `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`;
    return (
      <div className="active-city">
        <img src={url} width="100%" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);