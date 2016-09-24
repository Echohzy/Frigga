import {
  CHANGE_TEXT_INPUT_VALUE
} from "../actions/form_action";

function createdInputBlockReducer(reducerName){
  return function (attrName){
    return function (state={}, action){
      if(action.attrName === attrName && action.reducerName === reducerName){
        switch(action.type){
          case CHANGE_TEXT_INPUT_VALUE:
            return Object.assign({},state, {value: action.value});
          default:
            return state;
        }
      }else{
        return state;
      }
    };
  };
}

export default createdInputBlockReducer;