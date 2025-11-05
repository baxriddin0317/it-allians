import { Link } from "react-router-dom"

interface props {
  Image: string;
  href: string;
}

const LogoCard = ({Image, href}: props) => {
  return (
    <div className="relative group overflow-hidden flex items-center justify-center h-[205px] w-[347px] rounded-[30px] bg-white">
      <img className="" src={Image} alt="huawei" />
      <span className="absolute right-4 top-4 stroke-[#FF0000] group-hover:stroke-brand-black">
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4688 1.38281H28.4565V19.3706M27.0728 2.76649L1.95703 27.8828" strokeWidth="2.76735" strokeLinecap="square" />
        </svg>
      </span>

      <div className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 left-0 top-0 z-20 size-full bg-black/50">
        <Link className="flex items-center justify-center absolute bottom-0 bg-brand-normal text-brand-white font-bold text-2xl h-[60px] w-full" to={href}>
        Подробнее
        </Link>
      </div>
    </div>
  )
}

export default LogoCard