import { useState } from "react"
import LogoWhiteImage from '../../assets/logo-white.svg'

const Hero = () => {
  const [isAnimation, setIsAnimation] = useState(false)
  return (
    <section className={`sticky top-[90px] min-h-dvh z-[1] flex flex-col items-center justify-center transition-all duration-300 ${isAnimation ? 'bg-brand-light-black' : 'bg-white'}`}>
        <div className={`relative max-w-[980px] w-full mx-auto py-12 transition-all duration-300 ${isAnimation ? 'text-white' : 'text-brand-black'}`}>
          <span className={`block absolute transition-all duration-500 ${isAnimation ? 'left-0 top-10 stroke-white' : 'left-0 top-0 stroke-brand-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
              <path d="M0.519531 0.5H24.4805"  />
              <path d="M0.5 24L0.5 -1.15019e-06"  />
            </svg>
          </span>
          <span className={`block absolute transition-all duration-500 ${isAnimation ? 'right-0 top-10 stroke-white' : 'right-0 top-0 stroke-brand-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
              <path d="M23.9609 0.5H-6.48499e-05" />
              <path d="M23.9805 24L23.9805 -1.15019e-06" />
            </svg>
          </span>
          <span className={`block absolute transition-all duration-500 ${isAnimation ? 'left-0 bottom-10 stroke-white' : 'left-0 bottom-0 stroke-brand-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
              <path d="M0.519531 23.5H24.4805" />
              <path d="M0.5 0L0.5 24" />
            </svg>
          </span>
          <span className={`block absolute transition-all duration-500 ${isAnimation ? 'right-0 bottom-10 stroke-white' : 'right-0 bottom-0 stroke-brand-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
              <path d="M23.9609 23.5H-6.48499e-05" />
              <path d="M23.9805 0L23.9805 24" />
            </svg>
          </span>

          <h1 className="text-center font-bold text-[44px] mb-10">
          Надежная <span className='text-brand-normal'>дистрибуция IT-оборудования </span> <br />
          для <span className="italic font-normal relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-brand-normal">вашего</span> бизнеса
          </h1>
          <p className="text-xl font-light text-center uppercase">
          Компания современных бизнес-решений
          </p>
        </div>

        <div className={`relative w-[237px] h-[94px] rounded-full mx-auto mt-[104px] cursor-pointer ${isAnimation ? 'bg-brand-normal' : 'bg-brand-light-black'}`} onTouchMove={() => setIsAnimation(true)} onMouseEnter={() => setIsAnimation(true)} onMouseLeave={() => setIsAnimation(false)}>
          <img src={LogoWhiteImage} alt="logo" className={`size-16 absolute top-1/2 left-4 -translate-y-[calc(50%+4px)] object-contain ${isAnimation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in`} />
          <div className={`absolute top-1/2 bg-transparent rounded-full h-[78px] w-[120px] -translate-y-[calc(50%+2px)] transition-all duration-300 ease-in ${isAnimation ? 'right-2' : 'right-full translate-x-[calc(100%+8px)]'}`}>
            <div className="absolute size-full -z-1 border border-white/30 opacity-25 rounded-full"></div>
            <svg className="z-10" xmlns="http://www.w3.org/2000/svg" width={132} height={90} viewBox="0 0 132 90" fill="none">
              <rect x={2} y={2} width={120} height={78} rx={39} fill="black" fillOpacity="0.01" />
              <g filter="url(#filter1_d_3032_17580)">
                <rect x={2} y={2} width={120} height={78} rx={39} fill="#1E1E1E" fillOpacity="0.25" shapeRendering="crispEdges" />
              </g>
              <defs>
                <filter id="filter1_d_3032_17580" x={0} y={0} width={132} height={90} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx={4} dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3032_17580" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3032_17580" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* arrow left */}
        <div className={`fixed w-[369px] h-[394px] left-9 bottom-11 transition duration-500 ${isAnimation ? 'scale-125 -rotate-1' : ''}`}>
          <span className={`absolute top-0 left-16 transition duration-300 ${isAnimation ? 'fill-white' : 'fill-[#9e9e9e]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={75} height={74} viewBox="0 0 75 74">
              <path d="M52.3709 73.082L7.70503e-07 17.6271L74.2108 4.25325e-05L52.3709 73.082Z" />
            </svg>
          </span>
          <span className={`absolute left-2 top-9 transition duration-300 ${isAnimation ? 'fill-red-200' : 'fill-[#5e5e5e]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={135} height={133} viewBox="0 0 135 133">
              <path d="M5.77521e-06 132.121L40.1901 4.12311e-06L134.516 100.866L5.77521e-06 132.121Z" />
            </svg>
          </span>
          <span className={`absolute -left-2 bottom-10 transition duration-300 ${isAnimation ? 'fill-red-600' : 'fill-brand-light-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={187} height={191} viewBox="0 0 192 188">
              <path d="M192.007 0.000434112L1.82786e-06 41.8169L132.217 187.191L192.007 0.000434112Z" />
            </svg>
          </span>
          <span className={`absolute bottom-0 right-0 transition duration-300 ${isAnimation? 'fill-red-900' : 'fill-brand-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={240} height={234} viewBox="0 0 240 234">
              <path d="M1.02108e-05 233.598L74.6115 0.00138529L239.653 181.108L1.02108e-05 233.598Z" />
            </svg>
          </span>
        </div>
        {/* arrow right */}
        <div className={`fixed w-[369px] h-[394px] right-9 bottom-11 transition duration-500 ${isAnimation ? 'scale-125 rotate-1' : ''}`}>
          <span className={`absolute top-0 right-16 transition duration-300 ${isAnimation ? 'fill-white' : 'fill-[#9e9e9e]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={75} height={74} viewBox="0 0 75 74">
              <path d="M21.84 73.082L74.2109 17.6271L0.000171041 4.25325e-05L21.84 73.082Z" />
            </svg>
          </span>
          <span className={`absolute right-2 top-9 transition duration-300 ${isAnimation ? 'fill-red-200' : 'fill-[#5e5e5e]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={135} height={133} viewBox="0 0 135 133">
              <path d="M134.516 132.121L94.3257 4.12311e-06L1.3662e-06 100.866L134.516 132.121Z" />
            </svg>
          </span>
          <span className={`absolute -right-2 bottom-10 transition duration-300 ${isAnimation ? 'fill-red-600' : 'fill-brand-light-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={188} viewBox="0 0 192 188">
              <path d="M8.18238e-06 0.000434112L192.007 41.8169L59.7903 187.191L8.18238e-06 0.000434112Z" />
            </svg>
          </span>
          <span className={`absolute bottom-0 left-0 transition duration-300 ${isAnimation? 'fill-red-900' : 'fill-brand-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={240} height={234} viewBox="0 0 240 234">
              <path d="M239.653 233.598L165.042 0.00138529L0.000414282 181.108L239.653 233.598Z" />
            </svg>
          </span>
        </div>
    </section>
  )
}

export default Hero

