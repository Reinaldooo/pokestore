import {
  OPEN_SEARCH_DRAWER,
  CLOSE_SEARCH_DRAWER,
} from "../actions"

const initialState = {
  resultItems: [],
  shouldShow: false
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case OPEN_SEARCH_DRAWER:
      return {
        ...state,
        shouldShow: true
      }
    case CLOSE_SEARCH_DRAWER:
      return {
        ...state,
        shouldShow: false
      }
    default:
      return state;
  }
};

export default searchReducer;
