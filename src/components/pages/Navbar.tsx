import { BrandLogo } from "../../assets";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bg-bg_color z-10 w-full flex items-center justify-between py-4 px-10 border-b border-slate-300">
      <div className=" flex items-center">
        <img src={BrandLogo} className="w-[8rem]" alt="logo" />
      </div>
      <ul className=" flex items-center gap-10 text-sm font-medium [&>*]:cursor-pointer">
        <li>Location</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <button className=" font-bold border border-slate-300 py-3 px-8 rounded-xl">
        Signup
      </button>
    </nav>
  );
};

export { Navbar };
