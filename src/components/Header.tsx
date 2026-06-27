import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="w-full py-5 px-2 flex items-center justify-between gap-8 md:p-5">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <p className="uppercase text-xs sm:text-sm">
        <span>55 currencies</span> ·<span>EOD</span> · <span>ECB DATA</span>
      </p>
    </header>
  );
};

export default Header;
