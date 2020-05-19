import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

//Actions

//Get Logs
//thonk MW allows us to return a func in case of async call
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/logs"); //AJAX Call
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
