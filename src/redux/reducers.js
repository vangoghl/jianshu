import { combineReducers } from "redux";
import { INCREMENT, NEWFOUSED } from "./action-types";

const list = [];
function counter(state = list, action) {
  switch (action.type) {
    case INCREMENT:
      return state.push(action.data);
  }
}

function foused(state = "flase", action) {
  switch (action.type) {
    case NEWFOUSED:
      return !state;
  }
}

export default combineReducers({
  counter,
  foused
});
