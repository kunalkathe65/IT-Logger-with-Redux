import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";

//Actions

//Add new tech
export const addTech = (newTech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/techs", {
      method: "POST",
      body: JSON.stringify(newTech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

//Delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

//Get techs
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
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
