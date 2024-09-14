
const Footer = () => {
  return (
    <footer className="p-20 flex items-center justify-around">
      <div className="font-bold text-2xl">YourIdealHaven</div>
      <ul className="menu">
        <li>Product </li>
        <li>Install</li>
        <li>Quicstart</li>
      </ul>
      <ul className="menu">
        <li>Blog</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className=" flex items-center gap-4">
        <div className="icon">LinkedIn</div>
        <div className="icon">GitHub</div>
        <div className="icon">Mail</div>
      </div>
    </footer>
  );
};

export { Footer };

