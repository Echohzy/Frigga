import createdInputBlockReducer from "./input_block_reducer";

import { combineReducers } from "redux";

var InputBlockReducer = createdInputBlockReducer("commentReducer");

export default combineReducers({
  comment: InputBlockReducer("comment")
});