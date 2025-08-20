import { House } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="border-t-red-600 border-t-4 border-b-gray-200 border-b h-18 flex items-center">
      <img
        src="/scotia-brand-canvas-4.png"
        alt="scotiabank-logo"
        className="ml-6 w-42"
      />
      <span className="font-bold text-md pr-2 pl-2">|</span>
      <Link to="/">
        <House className="w-7 h-7 stroke-gray-300" />
      </Link>
    </section>
  );
};

export default Header;
