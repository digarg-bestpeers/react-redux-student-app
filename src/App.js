import React from "react"
import './App.css';
import {StudentDisplay} from "./components/StudentDisplay"
import store from "./store"
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <StudentDisplay />
      </div>
    </Provider>
  );
}

export default App;
