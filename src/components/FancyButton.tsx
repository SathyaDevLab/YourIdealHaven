import "./fancyButton.css";

const FancyButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button className="fancy-button" onClick={onClick}>
      {text}
    </button>
  );
};

export { FancyButton };
