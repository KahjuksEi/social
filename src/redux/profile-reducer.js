//когда в редюсер еще не пришел никакой стейт то юзаем первичный стейт
//в редюсере как аргумент по умолчанию
let initialState = {
  posts: [
    { message: "hello everybody!", id: 1, like: "33" },
    { message: "hi!", id: 2, like: "10" },
    { message: "wazzup!!", id: 3, like: "77" },
  ],
  newPostText: "it-kamasutra",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: state.newPostText,
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
    case "UPDATE-NEW-POST-TEXT": {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return { type: "ADD-POST" };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", newText: text };
};
export default profileReducer;
