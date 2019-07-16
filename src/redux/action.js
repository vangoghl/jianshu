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
import axios from "axios";

export const searchFocus = () => ({
  type: SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: SEARCH_BLIUR
});

export const mouseEnter = () => ({
  type: MOUSEENTER
});
export const mouseLeave = () => ({
  type: MOUSELEAVE
});
export const changePage = page => ({
  type: CHANGEPAGE,
  page
});

const changegetlist = data => ({
  type: CHANGE_LIST,
  data: data,
  totalPage: Math.ceil(data.length / 10)
});
export const getList = () => {
  return dispatch => {
    axios
      .get("http://101.132.64.131:8080/header")
      .then(res => {
        const data = res.data;
        dispatch(changegetlist(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
const changenewlist = data => ({
  type: CHANGELIST,
  data: data
});

export const newList = () => {
  return dispatch => {
    axios
      .get("http://101.132.64.131:8080/content?page=0")
      .then(res => {
        const data = res.data;

        dispatch(changenewlist(data));
      })
      .catch(() => {
        console.log("1", "error");
      });
  };
};
const changenewlist1 = data => ({
  type: CHANGELIST1,
  data: data
});

export const newList1 = () => {
  return dispatch => {
    axios
      .get("http://101.132.64.131:8080/author")
      .then(res => {
        const data = res.data;
        dispatch(changenewlist1(data));
      })
      .catch(() => {
        console.log("2", "error");
      });
  };
};
const changeGetMoreList = (data, nextpage) => ({
  type: GETMORELIST,
  data: data,
  page: nextpage
});

export const getMoreList = page => {
  const nextpage = page + 1;
  return dispatch => {
    axios
      .get("http://101.132.64.131:8080/content?page=" + nextpage)
      .then(res => {
        const data = res.data;
        dispatch(changeGetMoreList(data, nextpage));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
export const changeScrollTopShow = Show => ({
  type: SCROLLTOPSHOW,
  Show
});

export const getDetailList = id => ({
  type: GETDETAILLIST,
  id: id
});

export const loginFocused = () => ({
  type: LOGINFOCUSED
});
export const outFocused = () => ({
  type: OUTFOCUSED
});
export const bindleLoginFocused = () => ({
  type: BINDLELOGINFOCUSED
});

export const bindleLogin = (account, password) => {
  return dispatch => {
    axios
      .get(
        "http://101.132.64.131:8080/author?account=" +
          account +
          "&password" +
          password
      )
      .then(res => {
        const result = true;
        if (result) {
          dispatch(bindleLoginFocused());
        } else {
          alert("登录失败");
        }
      });
  };
};

const bindleRegisterFocused = () => ({
  type: BINDLEREGISTERFOCUSED
});

export const bindleRegister = (account, password) => {
  return dispatch => {
    axios
      .get(
        "http://101.132.64.131:8080/author?account=" +
          account +
          "&password" +
          password
      )
      .then(res => {
        const result = true;
        if (result) {
          dispatch(bindleRegisterFocused());
        } else {
          alert("登录失败");
        }
      });
  };
};

export const unPage = () => ({
  type: UNPAGE
});
