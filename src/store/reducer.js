const defaulteState = {
  focused: false
};
export default (state = defaulteState, action) => {
  if (action.type === "search_focus") {
    return {
      focused: true,
      list: []
    };
  }
  if (action.type === "search_blur") {
    return {
      focused: false
    };
  }
  return state;
};
