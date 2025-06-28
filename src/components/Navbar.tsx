import { useState } from 'react';
import menuLogo from '../assets/images/icon-hamburger.svg'
import closeLogo from '../assets/images/icon-close.svg'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const panelCss = 'bg-black min-w-screen min-h-screen fixed opacity-50 top-0 left-0 z-';
  const menuCss = 'bg-[var(--white)] fixed top-0 left-0 w-full flex justify-between px-6 py-8';

  function handleCloseMenu() {
    setShowMenu(prev => !prev);
  }

  return (
    <>
      <div className={!showMenu ? panelCss + ' hidden' : panelCss}></div>
      <nav className="absolute left-4">
        <button onClick={() => handleCloseMenu()} className='hover:cursor-pointer'>
          <img src={menuLogo} alt="Menu" />
        </button>

        <div id="menu" className={!showMenu ? menuCss + ' hidden' : menuCss}>
          <button onClick={() => handleCloseMenu()} className='hover:cursor-pointer'>
            <img src={closeLogo} alt="Close" />
          </button>
          <ul className='flex gap-4 font-bold'>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}