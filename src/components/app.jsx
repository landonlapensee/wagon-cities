import React from 'react';
import ActiveCity from '../containers/active_city.jsx';
import CityList from '../containers/city_list.jsx';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
