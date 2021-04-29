// TODO: add and export your own actions
import cities from "../cities";

// eslint-disable-next-line import/prefer-default-export
export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectedCity(city) {
  return {
    type: "SELECTED_CITY",
    payload: city
  };
}
