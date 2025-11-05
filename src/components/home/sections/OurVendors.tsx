
const OurVendors = () => {
  return (
    <section className="sticky top-[90px] min-h-dvh z-5 bg-brand-light-black flex flex-col items-center justify-center">
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

      
    </section>
  )
}

export default OurVendors