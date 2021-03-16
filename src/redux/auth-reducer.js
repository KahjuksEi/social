import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  /*продвинутый рефакторинг*/

  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.payload,
        /*isAuth: true,*/
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => {
  return { type: "SET-USER-DATA", payload: { userId, email, login, isAuth } };
};
/*thunk*/
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      /*стопаем сабмит какой формы и какие свва, не работает как надо*/
      dispatch(stopSubmit("login", { _error: "common error" }));
    }
  });
};
export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
