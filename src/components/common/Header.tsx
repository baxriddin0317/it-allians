
import { Link, NavLink } from 'react-router-dom'
import { LogoIcon } from '../icons'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-black h-[90px]">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-8 py-5">
        <Link className='h-12' to="/">
          <LogoIcon />
        </Link>
        <div className="hidden md:flex items-center h-[50px] gap-8">
          <nav className='h-full flex items-center bg-brand-light-black rounded-full text-brand-white text-sm font-bold uppercase gap-14 px-6'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-brand-normal' : 'hover:text-brand-normal transition-colors duration-500'}>О КОМПАНИИ</NavLink>
            <NavLink to="/2" className={({ isActive }) => isActive ? 'text-brand-normal' : 'hover:text-brand-normal transition-colors duration-500'}>ПОДБОР АВТО</NavLink>
            <NavLink to="/2" className={({ isActive }) => isActive ? 'text-brand-normal' : 'hover:text-brand-normal transition-colors duration-500'}>НАШИ ВЕНДОРЫ</NavLink>
            <NavLink to="/2" className={({ isActive }) => isActive ? 'text-brand-normal' : 'hover:text-brand-normal transition-colors duration-500'}>Контакты</NavLink>
          </nav>
          <button className='flex items-center justify-center bg-brand-white rounded-full cursor-pointer h-full px-6 hover:bg-brand-normal transition-colors duration-500 group'>
            <span className='block text-brand-black text-sm font-bold uppercase group-hover:text-brand-white transition-colors duration-500'>СТАТЬ ПАРТНЕРОМ</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header