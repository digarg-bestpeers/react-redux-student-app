import studentReducer from "./reducers/studentReducer"
import {createStore} from "redux"

const store = createStore(studentReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;