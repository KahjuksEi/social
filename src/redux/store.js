//старый стор, не редаксовский, висит на всякий случай))
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "hello everybody!", id: 1, like: "33" },
        { message: "hi!", id: 2, like: "10" },
        { message: "wazzup!!", id: 3, like: "77" },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
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
    },
  },
  _rerenderEntireTree() {
    console.log("some changed");
  },
  getState() {
    //геттер для вызова приватного метода _state
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
