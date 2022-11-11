import PrimaryNav from "../primary-nav";

export const Header = () => {
  return (
    <header className="fixed inset-0 border-b border-slate-200 shadow-md py-3 px-8 bg-white w-full max-h-16 z-10">
      <PrimaryNav />
    </header>
  );
};

export default Header;
