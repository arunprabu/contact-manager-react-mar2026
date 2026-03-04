import MenuList from "./MenuList";

// Functional Component with Anonymous fn
export const Footer = function () {
  const copyrightYear = 2026;

  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p className="pt-5 text-gray-500 text-xs">
        &copy; Copyright {copyrightYear} | Arun
      </p>
    </footer>
  );
};
