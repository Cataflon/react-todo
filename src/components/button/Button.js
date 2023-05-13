import "./Button.scss";

const Button = (props) => {
  const { click } = props;

  return (
    <div className="create-button">
      <button
        onClick={() => {
          click(true);
        }}
      >
        Create task
      </button>
    </div>
  );
};

export default Button;
