import Card from '../Card'
import LinkItem from '../LinkItem'

const EngineeringEquipment = () => {
  const links = [
    { id: 10, name: "Dallmeier" },
    { id: 11, name: "IDIS - IP-видеонаблюдение, ПО, комплексные решения, турникеты доступа AVIX" },
    { id: 12, name: "Протон-М (РФ) - системы интеллектуального видеонаблюдения для транспорта" }
  ]

  const links2 = [
    { id: 1, name: "DELTA ELECTRONICS - 1Ф/3Ф" },
    { id: 2, name: "EVADA ELECTRONICS - 1Ф/3Ф" },
    { id: 3, name: "СИНЕКСЕЛЬ - Модульный ЗФ, направление DC - Выпрямители - Инверторы 48B" },
    { id: 4, name: "ПАРУС ЭЛЕКТРО (РФ) - Входит в реестр Минпромторга" }
  ]

  return (
    <section className="sticky top-[90px] min-h-dvh z-3 bg-white flex flex-col items-center justify-center">
      <div>
        <h2 className="text-brand-normal text-center font-bold text-3xl md:text-5xl lg:text-[62px] xl:text-[71px] 2xl:text-[79px] leading-[normal]">
        ИНЖЕНЕРНОЕ ОБОРУДОВАНИЕ
        </h2>
      </div>
      <div className='max-w-[1050px] w-full mx-auto mt-[89px] flex flex-col gap-20'>
        <Card className="group/card pt-11 pb-8" title="СИСТЕМЫ ВИДЕО НАБЛЮДЕНИЯ">
          <div className="flex flex-col gap-3 text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
            {links.map((link) => (
              <LinkItem name={link.name} href="#" key={link.id} />
            ))}
          </div>
        </Card>
        <Card className="group/card pt-11 pb-8" title="ИСТОЧНИКИ БЕСПЕРЕБОЙНОГО ПИТАНИЯ">
          <div className="flex flex-col gap-3 text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
            {links2.map((link) => (
              <LinkItem name={link.name} href="#" key={link.id} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default EngineeringEquipment