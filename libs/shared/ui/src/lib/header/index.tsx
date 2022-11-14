import PrimaryNav from "../primary-nav";

export const Header = () => {
  return (
    <header className="fixed inset-0 border-b border-gray-200 shadow-lg py-3 px-9 bg-white w-full max-h-16 z-10">
      <PrimaryNav />
    </header>
  );
};

export default Header;
