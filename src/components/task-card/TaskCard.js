import "./TaskCard.scss";
import axios from "axios";

const TaskCard = (props) => {
  const { title, description, id, onDelete, onUpdate, updateId, click2 } =
    props;

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:3000/cards/${id}`).then(() => onDelete(id));
  };

  return (
    <div className="task">
      <div className="task-name">
        <p>{title}</p>
        <p className="card-description">{description}</p>
      </div>
      <div className="task-buttons">
        <button
          onClick={() => {
            click2(true);
            updateId(id);
            onUpdate(true);
          }}
        >
          Update
        </button>
        <button
          className="delete"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
