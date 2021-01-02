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
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: "0",
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      return state;
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
