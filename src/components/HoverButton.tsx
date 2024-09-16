import "./hoverButton.css";

const HoverButton = () => {
  return (
    <button className="hover-button">
      <span className="span-mother text-purple-800">
        <span>L</span>
        <span>e</span>
        <span>t</span>
        <span>'</span>
        <span>s</span>
        <span className=" opacity-0">_</span>
        <span>G</span>
        <span>o</span>
      </span>
      <span className="span-mother2">
        <span>H</span>
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>s</span>
        <span className=" opacity-0">_</span>
        <span>O</span>
        <span>f</span>
        <span>f</span>
        <span>!</span>
      </span>
    </button>
  );
};

export { HoverButton };
