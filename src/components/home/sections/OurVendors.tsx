import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Huawei from "../../../assets/logos/huawei_logo.png"
import IBM from "../../../assets/logos/ibm-logo-1.png"
import Brocade from "../../../assets/logos/brocade-logo-1.png"
import Juniper from "../../../assets/logos/juniper-logo.png"
import Xfusion from "../../../assets/logos/xfusion-logo.png"
import LogoCard from "../../LogoCard"

const OurVendors = () => {
  const prevButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)

  const vendors = [
    { image: Huawei, href: "#" },
    { image: IBM, href: "#" },
    { image: Brocade, href: "#" },
    { image: Juniper, href: "#" },
    { image: Xfusion, href: "#" },
  ]

  return (
    <section className="sticky top-[90px] min-h-dvh z-5 bg-brand-black flex flex-col items-center justify-center">
      <div className={`relative max-w-[766px] w-full mx-auto text-white`}>
        <span className={`block absolute transition-all duration-500 left-0 top-0 stroke-brand-white`}>
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
            <path d="M0.519531 0.5H24.4805"  />
            <path d="M0.5 24L0.5 -1.15019e-06"  />
          </svg>
        </span>
        <span className={`block absolute transition-all duration-500 right-0 top-0 stroke-brand-white`}>
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
            <path d="M23.9609 0.5H-6.48499e-05" />
            <path d="M23.9805 24L23.9805 -1.15019e-06" />
          </svg>
        </span>
        <span className={`block absolute transition-all duration-500 left-0 bottom-0 stroke-brand-white`}>
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
            <path d="M0.519531 23.5H24.4805" />
            <path d="M0.5 0L0.5 24" />
          </svg>
        </span>
        <span className={`block absolute transition-all duration-500 right-0 bottom-0 stroke-brand-white`}>
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
            <path d="M23.9609 23.5H-6.48499e-05" />
            <path d="M23.9805 0L23.9805 24" />
          </svg>
        </span>

        <h2 className="text-[77px] font-bold uppercase text-center">
        НАШИ <span className="text-brand-normal">ВЕНДОРЫ</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto mt-[89px] w-full px-10 relative">
        <button
          ref={prevButtonRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full flex items-center justify-center bg-brand-light-black rounded-lg hover:bg-brand-normal transition-colors duration-300 group cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width={19} height={14} viewBox="0 0 19 14" fill="none">
            <path d="M11.388 1.57262L16.6679 6.85246L11.388 12.1323M15.8556 6.85246L1.11125 6.85261" stroke="#FBFFFE" strokeWidth="2.22222" strokeLinecap="square" />
          </svg>
        </button>
        
        <button
          ref={nextButtonRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full flex items-center justify-center bg-brand-light-black rounded-lg hover:bg-brand-normal transition-colors duration-300 group cursor-pointer"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={19} height={14} viewBox="0 0 19 14" fill="none">
            <path d="M11.388 1.57262L16.6679 6.85246L11.388 12.1323M15.8556 6.85246L1.11125 6.85261" stroke="#FBFFFE" strokeWidth="2.22222" strokeLinecap="square" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onSwiper={(swiper) => {
            // Initialize navigation after Swiper is ready
            if (prevButtonRef.current && nextButtonRef.current) {
              // @ts-ignore - Swiper types issue with navigation
              swiper.params.navigation.prevEl = prevButtonRef.current
              // @ts-ignore - Swiper types issue with navigation
              swiper.params.navigation.nextEl = nextButtonRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }
          }}
          className="vendor-swiper"
        >
          {vendors.map((vendor, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <LogoCard Image={vendor.image} href={vendor.href} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default OurVendors