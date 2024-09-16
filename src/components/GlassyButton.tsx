import "./glassyButton.css";

const GlassyButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button className="glassy-button" onClick={onClick}>
      {text}
    </button>
  );
};

export { GlassyButton };
