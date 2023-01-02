import {combineReducers} from "redux";
import courseReducer from "./reducers/courseReducer";
import courseTypeReducer from "./reducers/courseTypeReducer";

const rootReducer = combineReducers({
    course: courseReducer,
    courseType: courseTypeReducer
})

export default rootReducer;