import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
/*import { thunk as thunkMiddleware } from "redux-thunk";*/
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

//комбинируем типа за каждое наше свво отвечает опред редюсер и отдаем их стору
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});
/*applyMiddleware слой для санок*/
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
