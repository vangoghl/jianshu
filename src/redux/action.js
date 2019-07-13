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
  BINDLEREGISTERFOCUSED
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
      .get("/api/headerList.json")
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
      .get("/api/constendList.json")
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
      .get("/api/zuozhe.json")
      .then(res => {
        const data = res.data;

        dispatch(changenewlist1(data));
      })
      .catch(() => {
        console.log("2", "error");
      });
  };
};
const changeGetMoreList = (data, nextPage) => ({
  type: GETMORELIST,
  data: data,
  nextPage
});

export const getMoreList = page => {
  return dispatch => {
    axios
      .get("/api/constendList1.json?=" + page)
      .then(res => {
        const data = res.data;
        dispatch(changeGetMoreList(data, page + 1));
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

const changeGetDetailList = data => ({
  type: GETDETAILLIST,
  data: data
});

export const getDetailList = () => {
  return dispatch => {
    axios
      .get("/api/constendList.json")
      .then(res => {
        const data = res.data;

        dispatch(changeGetDetailList(data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

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
      .get("/api/login.json?account=" + account + "&password" + password)
      .then(res => {
        const result = res.data.data;
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
      .get("/api/login.json?account=" + account + "&password" + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(bindleRegisterFocused());
        } else {
          alert("登录失败");
        }
      });
  };
};
