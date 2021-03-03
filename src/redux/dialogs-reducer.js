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
};
const dialogsReducer = (state = initialState, action) => {
  /*продвинутый рефакторинг*/
  switch (action.type) {
    case "ADD-POST-TO-MESS":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 10, message: body }],
      };
    default:
      return state;
  }
};
export const addPostToMessActionCreator = (newMessageBody) => {
  return { type: "ADD-POST-TO-MESS", newMessageBody };
};
export default dialogsReducer;
