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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login) => {
  return { type: "SET-USER-DATA", data: { userId, email, login } };
};

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(getAuthUserData(id, email, login));
    }
  });
};

export default authReducer;
