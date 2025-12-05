import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-transparent relative z-10">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
