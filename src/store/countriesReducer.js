
const initialState = {
    list: [],
    selected: null,
    status: 'idle',
  };
  
  const SELECT_COUNTRY = 'SELECT_COUNTRY';
  const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
  const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
  const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
  
  export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
      case SELECT_COUNTRY:
        return {
          ...state,
          selected: action.payload,
        };
      case FETCH_COUNTRIES_REQUEST:
        return {
          ...state,
          status: 'loading',
        };
      case FETCH_COUNTRIES_SUCCESS:
        return {
          ...state,
          status: 'succeeded',
          list: action.payload,
        };
      case FETCH_COUNTRIES_FAILURE:
        return {
          ...state,
          status: 'failed',
        };
      default:
        return state;
    }
  }
  

  export const selectCountry = (country) => ({
    type: SELECT_COUNTRY,
    payload: country,
  });
  
  export const fetchCountriesRequest = () => ({
    type: FETCH_COUNTRIES_REQUEST,
  });
  
  export const fetchCountriesSuccess = (countries) => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  });
  
  export const fetchCountriesFailure = () => ({
    type: FETCH_COUNTRIES_FAILURE,
  });
  