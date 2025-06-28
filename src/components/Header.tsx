import Navbar from "./Navbar";
import logo from '../assets/images/logo.svg'

export default function Header() {
  return (
    <header className="py-8 z-20 w-full flex items-center justify-center fixed bg-transparent">
      <img src={logo} alt="Logo" className=""/>
      <Navbar />
    </header>
  );
}