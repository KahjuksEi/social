import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";
let initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action) => {
  /*продвинутый рефакторинг*/

  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
export const initializedSuccess = () => {
  return { type: "INITIALIZED_SUCCESS" };
};
/*thunk*/
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  /*когда все промисы из массива зарезолвятся*/
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
