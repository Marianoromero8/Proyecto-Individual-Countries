import {GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES} from './action' 

const initialState = {
    inmutableCountries: [],
    countries: [],
    activities: [],
    countryDetail: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                inmutableCountries: action.payload
            }
        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }
            default:
            return state;
    }
}

export default reducer;