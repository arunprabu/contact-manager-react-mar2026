import { Link } from "react-router";

// Functional Component with Arrow fn
const MenuList = () => {
  // must return JSX
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <Link
          to="/"
          aria-current="page"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/contacts"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Contact Manager
        </Link>
        <Link
          to="/todos-v1"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Todos V1
        </Link>
        <Link
          to="/todos-v2"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Todos V2
        </Link>
        <Link
          to="/spotify"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Spotify
        </Link>
        <Link
          to="/about"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/counter"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
        >
          Counter
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
