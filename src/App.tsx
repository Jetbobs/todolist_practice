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
  const [items, setItems] = useState<string[]>([]);

  const addItem = (newItem: string) => {
    setItems([...items, newItem]);
  };

  return (
    <>
      <div className="App flex flex-col mx-auto my-0 w-[500px] gap-[20px] h-full justify-center">
        <header>
          <Header></Header>
        </header>
        <Editor addItem={addItem}></Editor>
        <List items={items}></List>
      </div>
    </>
  );
}

export default App;
