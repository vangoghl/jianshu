import { combineReducers } from "redux";
import {
  SEARCH_FOCUS,
  SEARCH_BLIUR,
  CHANGE_LIST,
  MOUSEENTER,
  MOUSELEAVE,
  CHANGEPAGE,
  CHANGELIST,
  CHANGELIST1,
  GETMORELIST,
  SCROLLTOPSHOW,
  GETDETAILLIST,
  LOGINFOCUSED,
  BINDLELOGINFOCUSED,
  OUTFOCUSED,
  BINDLEREGISTERFOCUSED,
  UNPAGE
} from "./action-type";

const defaultState = {
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
};

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...state,
        focused: true
      };
    case SEARCH_BLIUR:
      return {
        ...state,
        focused: false
      };
    case CHANGE_LIST:
      return {
        ...state,
        list: action.data,
        totalPage: action.totalPage
      };
    case MOUSEENTER:
      return {
        ...state,
        mouseIn: true
      };
    case MOUSELEAVE:
      return {
        ...state,
        mouseIn: false
      };
    case CHANGEPAGE:
      return {
        ...state,
        page: action.page
      };
    default:
      return { ...state };
  }
};
const homeState = {
  list: [],
  list1: [],
  page: 0,
  Show: false
};

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case CHANGELIST:
      return { ...state, list: action.data };
    case CHANGELIST1:
      return { ...state, list1: action.data };
    case GETMORELIST:
      return {
        ...state,
        list: state.list.concat(action.data),
        page: state.nextpage
      };
    case SCROLLTOPSHOW:
      return {
        ...state,
        Show: action.Show
      };

    case UNPAGE:
      return {
        ...state,
        page: 0
      };
    default:
      return { ...state };
  }
};
const detailState = {
  id: 0
};
const detailReducer = (state = detailState, action) => {
  switch (action.type) {
    case GETDETAILLIST:
      return {
        ...state,
        id: action.id
      };
    default:
      return { ...state };
  }
};
const loginState = {
  focused: false
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGINFOCUSED:
      return {
        ...state,
        focused: false
      };
    case BINDLELOGINFOCUSED:
      return {
        ...state,
        focused: true
      };
    case OUTFOCUSED:
      return {
        ...state,
        focused: false
      };
    default:
      return { ...state };
  }
};

const registerState = {
  focused: false
};

const registerReducer = (state = registerState, action) => {
  switch (action.type) {
    case BINDLEREGISTERFOCUSED:
      return {
        ...state,
        focused: true
      };
    default:
      return { ...state };
  }
};
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
  register: registerReducer
});
