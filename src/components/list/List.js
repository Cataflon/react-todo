import "./List.scss";
import TaskCard from "../task-card/TaskCard";
import TaskScreen from "../task-screen/TaskScreen";
import axios from "axios";
import { useEffect, useState } from "react";

const List = (props) => {
  const { createTask, click, click2 } = props;
  const [cardModel, setCardModel] = useState();
  const [actionDelete, setActionDelete] = useState();
  const [actionUpdate, setActionUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();

  const getApiDate = async () => {
    const response = await axios.get("http://localhost:3000/cards");
    setCardModel(response.data);
  };

  useEffect(() => {
    getApiDate();
  }, [actionDelete]);

  return (
    <div className="wrapper">
      {!createTask &&
        !actionUpdate &&
        cardModel?.map((card, index) => (
          <TaskCard
            click2={click2}
            key={`task-${index}`}
            title={card.title}
            description={card.description}
            onDelete={setActionDelete}
            onUpdate={setActionUpdate}
            updateId={setUpdateId}
            id={card.id}
          />
        ))}
      {createTask && <TaskScreen click={click} click2={click2} />}
      {actionUpdate && (
        <TaskScreen click={setActionUpdate} id={updateId} click2={click2} />
      )}
    </div>
  );
};

export default List;
