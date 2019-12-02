import { GET_NODES, GET_NODE, GET_NODE_CHILDREN } from "../actions/types";

const initialState = {
  nodes: [],
  node: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NODE_CHILDREN:
      return {
        ...state,
        nodes: action.payload
      };

    case GET_NODE:
      return {
        ...state,
        node: action.payload
      };

    default:
      return state;
  }
}
