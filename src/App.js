import React from "react";
import "./App.css";
import Node from "./components/Node";
import { Provider } from "react-redux";
import store from "./store";
import CreateNode from "./components/CreateNode";
import UserFake from "./components/UserFake";

function App() {
  return (
    <div>
      {/* { <UserFake />} */}
      {
        <Provider store={store}>
          <div className="App">
            hello
            <Node />
          </div>
        </Provider>
      }
    </div>
  );
}

export default App;
