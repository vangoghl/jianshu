import { combineReducers } from "redux";
import { INCREMENT, NEWFOUSED } from "./action-types";

const list = [];
function counter(state = list, action) {
  switch (action.type) {
    case INCREMENT:
      return state.push(action.data);
  }
}
const foused = "flase";
function foused(state = foused, action) {
  switch (action.type) {
    case NEWFOUSED:
      return !state;
  }
}

export default combineReducers({
  counter,
  foused
});
