import { combineReducers } from "redux";
import nodeReducer from "./nodeReducer";

// получает данные из сомпонента (функция mapStateToProps {state.reducerName})
//  о том, какой из редьюсеров вызывать
export default combineReducers({
  node: nodeReducer
});
