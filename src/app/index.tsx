import React from "react";
// import store from "../store";
// import { Provider } from "react-redux";
import "./App.scss";

const App: React.FC = () => {
  return (
    // <Provider store={store}>
      <div className="App p-6 items-center justify-center">
        <h1 className="text-blue-400 font-extrabold hover:text-gray-700">
          Hello World!
        </h1>
        <p className="tracking-widest">This is my first React App.</p>
      </div>
    // </Provider>
  );
};

export default App;
