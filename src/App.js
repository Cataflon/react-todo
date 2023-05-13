import "./App.scss";
import List from "./components/list/List";
import Button from "./components/button/Button";
import { useState } from "react";

const App = () => {
  const [createTask, setCreateTask] = useState(false);
  const [updateTask, setUpdateTask] = useState(false);

  return (
    <div className="App">
      <div className="title">
        <h1>Todo list</h1>
      </div>
      <List
        click2={setUpdateTask}
        createTask={createTask}
        click={setCreateTask}
      />
      {!createTask && !updateTask && <Button click={setCreateTask} />}
    </div>
  );
};

export default App;
