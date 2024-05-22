import logo from "../home-logo.png";
function Header() {
    return(
        <>
        <div className="p-2">
    <header className="flex items-center p-2 rounded">
      <img className="h-12 mx-2" src={logo} alt="Logo" />
      <span className="font-bold text-xl text-opacity-50">Recruitment</span>
    </header>
  </div>;
        </>
    )
  
}

export default Header;
