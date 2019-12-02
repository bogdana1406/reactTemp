import axios from "axios";
import { GET_ERRORS, GET_NODE, GET_NODE_CHILDREN } from "./types";

export const getInitialNode = node => async dispatch => {
  try {
    const res = await axios.get("/db/node");
    dispatch({
      type: GET_NODE,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const createNode = node => async dispatch => {
  try {
    const res = await axios.post("/db", node);
    dispatch({
      type: GET_NODE,
      payload: res.data
    });
    console.log(node);
  } catch (err) {}
};

// export const getChildNode = () => async dispatch => {
//   try {
//     const res = await axios.post("/db");
//     console.log(node);
//   } catch (err) {}
// };
