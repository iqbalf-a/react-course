import {createStore} from "redux";
import rootReducer from "./rootStore";

const store = createStore(rootReducer)

export default store;