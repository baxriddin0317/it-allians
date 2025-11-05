import Card from '../Card'
import { Link } from 'react-router-dom'

const Service = () => {
  const links = [
    { id: 1, name: "Договором ", subName: "услуг или сервисными пакетами (Service Packs)." },
    { id: 2, name: "Расширенная техническая поддержка ", subName: "с различным уровенем SLA для оборудования Huawei." },
    { id: 3, name: "Расширенная техническая поддержка ", subName: "с различным уровенем SLA для оборудования Lenovo. " },
    { id: 4, name: "Проектная поставка сервисных комплектующих: ", subName: "Lenovo, Dell/EMC, Cisco, IBM, HPE, NetApp, Hitachi" }
  ]
  return (
    <section className="sticky top-[90px] min-h-dvh z-4 bg-white flex flex-col items-center justify-center">
      <div>
        <h2 className="text-brand-normal text-center font-bold text-3xl md:text-5xl lg:text-[62px] xl:text-[71px] 2xl:text-[79px] leading-[normal]">
        СЕРВИС
        </h2>
      </div>
      <div className='max-w-[1050px] w-full mx-auto mt-[89px] flex flex-col gap-20'>
        <Card className="group/card pt-11 pb-8">
          <p className='text-brand-black group-hover/card:text-white text-lg font-light'>
            <span className='font-bold'>Оборудование лидирующих мировых производителей </span>
            <span>
            имеет заводскую гарантию, однако она ограничена, в силу того, что вендоры ушли с рынка РФ. Здесь требуется участие поставщика - посредник заводит сервисную заявку у вендора и ведет сервисный кейс от имени заказчика. Основная проблема в этой схеме - сроки замены комплектующих. Ранее на территории РФ были склады с запчастями, теперь доставка осуществляется со складов в Азии и СНГ.
            </span>
          </p>
          <div className="text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
            <h3 className='text-lg text-brand-normal font-bold'>
            Партнеры ИТ-Альянс могут воспользоваться дополнительными сервисными услугами компании:
            </h3>
            <div className="flex flex-col gap-3 text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
              {links.map((link) => (
                <Link key={link.id} to='#' className="flex items-center gap-4 hover:text-brand-normal group/link">
                  <div className="flex items-center">
                    <span className="block h-px w-2 pb-px group-hover/card:bg-brand-white group-hover/link:w-6 transition-all duration-300 bg-brand-black"></span>
                    <span className="block size-1.5 rounded-full group-hover/card:bg-brand-white bg-brand-black"></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold capitalize">{link.name}</span>
                    <span>{link.subName}</span>
                    <svg className="stroke-[#5E5E5E] group-hover/link:stroke-amber-500 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                      <path d="M9.93041 6.62023V11.1341H0.300781L0.300781 1.50448H5.14689M7.22208 0.300781H11.1341V4.21282M10.8332 0.601707L5.04458 6.39032" strokeWidth="0.601852" strokeLinecap="square" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Service