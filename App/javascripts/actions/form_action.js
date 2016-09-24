const CHANGE_TEXT_INPUT_VALUE = "CHANGE_TEXT_INPUT_VALUE";

function changeTextInputValue(reducerName, attrName, text){
  return {
    type: CHANGE_TEXT_INPUT_VALUE,
    reducerName: reducerName,
    attrName: attrName,
    text: text
  };
}

export {
  CHANGE_TEXT_INPUT_VALUE,
  changeTextInputValue
};