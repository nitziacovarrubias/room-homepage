import { useState } from 'react';
import menuLogo from '../assets/images/icon-hamburger.svg'
import closeLogo from '../assets/images/icon-close.svg'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const panelCss = 'bg-black min-w-screen min-h-screen fixed opacity-50 top-0 left-0 z-';
  const menuCss = 'bg-[var(--white)] top-0 left-0 w-full flex justify-between px-6 py-8 fixed xl:static xl:w-auto xl:bg-transparent xl:text-white xl:ml-[150px]';

  function handleCloseMenu() {
    setShowMenu(prev => !prev);
  }

  return (
    <>
      <div className={!showMenu ? panelCss + ' hidden' : panelCss}></div>
      <nav className="absolute left-4 xl:visible">
        <button onClick={() => handleCloseMenu()} className='hover:cursor-pointer xl:hidden'>
          <img src={menuLogo} alt="Menu" />
        </button>

        <div id="menu" className={`${menuCss} ${showMenu ? 'block' : 'hidden'} xl:block`}>
          <button onClick={() => handleCloseMenu()} className='hover:cursor-pointer xl:hidden'>
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