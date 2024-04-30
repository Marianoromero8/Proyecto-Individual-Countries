import {GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES, GET_DETAIL, GET_BY_NAME, POST_ACTIVITY, FETCH_ERROR, POST_ACTIVITY_FAIL} from './action' 

const initialState = {
    inmutableCountries: [],
    countries: [],
    activities: [],
    countryDetail: [],
    error: null
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
        case GET_DETAIL:
            return{
                ...state,
                countryDetail: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                countries: action.payload
            }
        case POST_ACTIVITY:
            return{
                ...state,
                activities: action.payload
            }
        case POST_ACTIVITY_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload
                }
            default:
            return state;
    }
}

export default reducer;