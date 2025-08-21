import { House, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <section className="border-t-red-600 border-t-4 border-b-gray-200 border-b h-18 flex items-center p-4 bg-white">
      <img
        src="/scotia-brand-canvas-4.png"
        alt="scotiabank-logo"
        className="ml-6 w-42"
      />

      {!isLoginPage && (
        <>
          <span className="font-bold text-md pr-2 pl-2">|</span>
          <Link to="/">
            <House className="w-7 h-7 stroke-gray-300" />
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 p-2 rounded ml-auto cursor-pointer hover:bg-red-600"
          >
            <LogOut className="w-5 h-5 stroke-white" />
          </button>
        </>
      )}
    </section>
  );
};

export default Header;
