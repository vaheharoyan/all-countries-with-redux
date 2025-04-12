const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';

const initialState = {
  countries: [],
  selectedCountry: null,
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    case SET_SELECTED_COUNTRY:
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
}

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const selectCountry = (country) => ({
  type: SET_SELECTED_COUNTRY,
  payload: country,
});

export const fetchCountries = () => {
  return async (dispatch) => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    dispatch(setCountries(data));
  };
};
