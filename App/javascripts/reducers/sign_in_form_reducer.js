import createdInputBlockReducer from "./input_block_reducer";

import { combineReducers } from "redux";

var InputBlockReducer = createdInputBlockReducer("signInReducer");

export default combineReducers({
  login_name: InputBlockReducer("login_name"),
  password: InputBlockReducer("password")
});

