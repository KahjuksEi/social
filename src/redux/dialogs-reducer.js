let initialState = {
  dialogs: [
    { name: "Ash", id: 1 },
    { name: "Ken", id: 2 },
    { name: "Tom", id: 3 },
    { name: "Joy", id: 4 },
    { name: "Amy", id: 5 },
    { name: "Sid", id: 6 },
  ],
  messages: [
    { message: "Hi", id: 1 },
    { message: "Hello!", id: 2 },
    { message: "How do you do?", id: 3 },
  ],
  newPostText: "Greet!",
};
const dialogsReducer = (state = initialState, action) => {
  /*продвинутый рефакторинг*/
  switch (action.type) {
    case "ADD-POST-TO-MESS":
      let newPost = state.newPostText;
      return {
        ...state,
        newPostText: "",
        messages: [...state.messages, { message: state.newPostText, id: 10 }],
      };
    case "UPDATE-NEW-POST-TEXT-TO-MESS":
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};
export const addPostToMessActionCreator = () => {
  return { type: "ADD-POST-TO-MESS" };
};
export const updateNewPostTextToMessActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT-TO-MESS", newText: text };
};
export default dialogsReducer;
