import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";

export const getAllCountries = () => {
    return async function(dispatch){
        try{
            const {data} = await axios.get('http://localhost:3001/api/countries')
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const getAllActivities = () => {
    return async function(dispatch){
        try{
            const {data} = await axios.get('http://localhost:3001/api/activities')
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}