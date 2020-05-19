import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

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

//Update Log
export const updateLog = (updatedLog) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/logs/${updatedLog.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedLog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Add new Log
export const addLog = (newLog) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/logs", {
      method: "POST",
      body: JSON.stringify(newLog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Search for a Log
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/logs/?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Delete Log
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:5000/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
//Set Current Log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear Current Log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
