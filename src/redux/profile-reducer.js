import { usersAPI, profileAPI } from "../api/api";

//когда в редюсер еще не пришел никакой стейт то юзаем первичный стейт
//в редюсере как аргумент по умолчанию
let initialState = {
  posts: [
    { message: "hello everybody!", id: 1, like: "33" },
    { message: "hi!", id: 2, like: "10" },
    { message: "wazzup!!", id: 3, like: "77" },
  ],
  // newPostText: "it-kamasutra",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: action.newPostText,
        like: "0",
      };
      /*по правилам созд копию стейта в котором меняем данные*/
      /*и копии объектов кот меняем, чтоб была иммутабельность*/
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    // case "UPDATE-NEW-POST-TEXT": {
    //   let stateCopy = { ...state };
    //   stateCopy.posts = [...state.posts];
    //   stateCopy.newPostText = action.newText;
    //   return stateCopy;
    // }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SET_STATUS": {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
/*AC фия возвр объект экшн в кот инкапс данные для редюсера чтобы он применил изменения стейта*/
export const addPostActionCreator = (newPostText) => {
  return { type: "ADD-POST", newPostText };
};
// export const updateNewPostTextActionCreator = (text) => {
//   return { type: "UPDATE-NEW-POST-TEXT", newText: text };
// };
export const setUserProfile = (profile) => {
  return { type: "SET_USER_PROFILE", profile };
};
export const setStatus = (status) => {
  return { type: "SET_STATUS", status };
};

/*THUNKS:*/
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
