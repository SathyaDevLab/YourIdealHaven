import "./animatedButton.css";

const AnimatedButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button className="animated-button" onClick={onClick}>
      <span>{text}</span>
      <span></span>
    </button>
  );
};

export { AnimatedButton };
