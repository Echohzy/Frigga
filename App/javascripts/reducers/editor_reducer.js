import createdInputBlockReducer from "./input_block_reducer";

import { combineReducers } from "redux";

var InputBlockReducer = createdInputBlockReducer("editorReducer");

export default combineReducers({
  title: InputBlockReducer("title"),
  short_describetion: InputBlockReducer("short_describetion"),
  content: InputBlockReducer("content")
});