import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_BY_NAME = "GET_BY_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const FETCH_ERROR = "FETCH_ERROR";
export const POST_ACTIVITY_FAIL = "POST_ACTIVITY_FAIL";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const ORDER_ASC_POPULATION = "ORDER_ASC_POPULATION";
export const ORDER_DESC_POPULATION = "ORDER_DESC_POPULATION";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA"

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

export const getDetail = (id) => {
    return async function(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/api/countries/${id}`)
            return dispatch({
                type:GET_DETAIL,
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

export const getByName = (name) => {
    return async function(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/api/countries/country/name?name=${name}`)
            return dispatch({
                type: GET_BY_NAME,
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

export const postActivity = (payload) => {
    return async function(dispatch){
        try{
            const post = await axios.post('http://localhost:3001/api/activities/post', payload)
            dispatch({
                type: POST_ACTIVITY,
                payload: post.data
            })
            return post
        }
        catch(error){
                dispatch({
                type: POST_ACTIVITY_FAIL,
                payload: error.response.data
            })
            throw error;
        }
    }
}

export const filterContinent = (filter) => {
    return{
        type: FILTER_CONTINENT,
        payload: filter
    }
}

export const activityFilter = (filter) => {
    return{
    type: FILTER_ACTIVITIES,
    payload: filter
    }
}

export const orderDescendente = () => {
    return{
        type: ORDER_DESC_POPULATION,
    }
}

export const orderAscendente = () => {
    return{
        type: ORDER_ASC_POPULATION,
    }
}

export const orderAZ = () => {
    return{
        type: ORDER_AZ
    }
}

export const orderZA = () => {
    return{
        type:ORDER_ZA
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    };
};
