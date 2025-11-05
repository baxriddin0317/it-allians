import { Link } from 'react-router-dom'

interface props {
  name: string;
  href: string;
}

const LinkItem = ({name, href}: props) => {
  return (
    <Link to={href} className="flex items-center gap-4 hover:text-brand-normal group/link">
      <div className="flex items-center">
        <span className="block h-px w-2 pb-px group-hover/card:bg-brand-white group-hover/link:w-6 transition-all duration-300 bg-brand-black"></span>
        <span className="block size-1.5 rounded-full group-hover/card:bg-brand-white bg-brand-black"></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-light capitalize">{name}</span>
        <svg className="stroke-[#5E5E5E] group-hover/link:stroke-amber-500 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
          <path d="M9.93041 6.62023V11.1341H0.300781L0.300781 1.50448H5.14689M7.22208 0.300781H11.1341V4.21282M10.8332 0.601707L5.04458 6.39032" strokeWidth="0.601852" strokeLinecap="square" />
        </svg>
      </div>
    </Link>
  )
}

export default LinkItem