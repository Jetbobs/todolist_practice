import { useState } from "react";
import "./css/global.scss";
import "./App.css";
import "./index.css";
//components
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import "./App.css";

function App() {
  return (
    <>
      <div className="App flex flex-col mx-auto my-0 w-[500px] gap-[20px] h-full">
        <header>
          <Header></Header>
        </header>
        <Editor></Editor>
        <List></List>
      </div>
    </>
  );
}

export default App;
