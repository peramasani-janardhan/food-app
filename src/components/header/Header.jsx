import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <HeaderSearch />
        <Navbar />
      </div>
    </>
  );
};
export default Header;
