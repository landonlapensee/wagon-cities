import React, { Component } from 'react';
import City from './city.jsx';
// import App from '../components/app.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
// [...]

// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  
  componentWillMount() {
    this.props.setCities();
  }
  
  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return (
            <City city={city} key={city.name} />
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

// export default CityList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);

