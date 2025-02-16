import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_START = "FETCH_START";

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";


export const fetchSmurfs =() =>{
    return(dispatch)=>{
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs')
        .then(response=>{
            dispatch(fetchSuccess(response.data))
        
        })
        .catch(error =>{
            dispatch(setError(error))
        })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (item) => {
    return({type: FETCH_SUCCESS, payload: item});
}

export const fetchError = (errorMessage) => {
    return ({type: FETCH_ERROR, payload: errorMessage});
}
export const addSmurf = (smurfs) => {
    return ({type: ADD_SMURF, payload: smurfs});
}
export const setError = (smurfs) => {
    return ({type: SET_ERROR, payload: smurfs});
}

