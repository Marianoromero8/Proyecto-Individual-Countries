import {GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES, GET_DETAIL, GET_BY_NAME, POST_ACTIVITY, FETCH_ERROR, POST_ACTIVITY_FAIL, FILTER_CONTINENT, FILTER_ACTIVITIES,ORDER_ASC_POPULATION, ORDER_DESC_POPULATION, ORDER_AZ, ORDER_ZA} from './action' 

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
                activities: [...state.activities, action.payload]
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
        case FILTER_CONTINENT:
            const filtContinent = state.inmutableCountries.filter(cont => cont.continent === action.payload)
            return {
                ...state,
                countries: filtContinent
            }
        case FILTER_ACTIVITIES:
            if(action.payload === "All"){
                return{
                    ...state,
                    countries: [...state.inmutableCountries]
                }
            }
            const filActivities = state.inmutableCountries.filter(count => count.activities.some(act => act.name === action.payload))
            return{
                ...state,
                countries: filActivities
            }
        case ORDER_ASC_POPULATION:
            const orderAscPopulation = [...state.countries].sort((a, b) => {
                return a.population - b.population
            })
            return{
                ...state,
                countries: orderAscPopulation
            }
        case ORDER_DESC_POPULATION:
            const orderDescPopulation = [...state.countries].sort((a, b) => {
                return b.population - a.population
            })
            return{
                ...state,
                countries: orderDescPopulation
            }
        case ORDER_AZ:
            const orderAZ = [...state.countries].sort((a, b) => a.name.localeCompare(b.name))
            return{
                ...state,
                countries: orderAZ
            }
        case ORDER_ZA:
            const orderZA = [...state.countries].sort((a, b) => b.name.localeCompare(a.name))
            return{
                ...state,
                countries: orderZA    
            }
        default:
            return state;
    }
}

export default reducer;