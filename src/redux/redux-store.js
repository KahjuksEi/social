import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

//комбинируем типа за каждое наше свво отвечает опред редюсер и отдаем их стору
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});
let store = createStore(reducers);
window.store = store;

export default store;
