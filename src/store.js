import studentReducer from "./reducers/studentReducer"
import {createStore} from "redux"

const store = createStore(studentReducer);
export default store;