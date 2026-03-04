import { Link } from "react-router";
import MenuList from "./MenuList";

// Functional Component with named fn
function Header() {
  // must return JSX
  return (
    <nav className="relative bg-green-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="text-amber-300 text-xl">
                Contact Manager App
              </Link>
            </div>

            <MenuList />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
