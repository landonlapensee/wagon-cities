import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  render() {
    return (
      <div className="list-group-item">
        {this.props.city.name}
      </div>
    );
  }
}

export default City;