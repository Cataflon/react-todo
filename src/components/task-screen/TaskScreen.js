import { useEffect, useState } from "react";
import axios from "axios";
import "./TaskScreen.scss";
import { v4 as uuidv4 } from "uuid";

const TaskScreen = (props) => {
  const { click, id, click2 } = props;
  const [toDoModel, setToDoModel] = useState({
    title: "",
    description: "",
  });

  const createToDo = async () => {
    const response = await axios
      .post("http://localhost:3000/cards", toDoModel)
      .then(() => {
        window.location.reload();
      });
  };

  const updateToDO = async () => {
    const response = await axios
      .put(`http://localhost:3000/cards/${id}`, toDoModel)
      .then(() => {
        window.location.reload();
      });
  };

  const getItemData = async () => {
    const response = await axios.get(`http://localhost:3000/cards/${id}`);
    setToDoModel({
      title: response.data.title,
      description: response.data.description,
      id: id,
    });
  };

  useEffect(() => {
    if (id) {
      getItemData();
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        className="task-input-name"
        placeholder="Nume task"
        value={toDoModel.title}
        onChange={(event) => {
          setToDoModel({
            ...toDoModel,
            title: event.target.value,
          });
        }}
      />
      <textarea
        type="text"
        className="task-input-description"
        placeholder="Descriere"
        value={toDoModel.description}
        onChange={(event) => {
          setToDoModel({
            ...toDoModel,
            description: event.target.value,
          });
        }}
      />
      <div className="button-list">
        <button
          className="button-update"
          onClick={() => {
            click(false);
            click2(false);
          }}
        >
          Go back
        </button>
        <button
          className="button-update"
          onClick={() => {
            id ? updateToDO() : createToDo();
          }}
        >
          {id ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default TaskScreen;
