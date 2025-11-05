import Card from "../Card"
import LinkItem from "../LinkItem"

const ITEquipmentSupply = () => {

  const cardsData = [
    {
      title: "Серверное оборудование",
      sections: [
        {
          title: "Серверы мировых производителей:",
          links: [
            { id: 1, name: "XFusion" },
            { id: 2, name: "Dell" },
            { id: 3, name: "HP" },
            { id: 4, name: "Lenovo" },
            { id: 5, name: "Supermicro" },
            { id: 6, name: "GPU-серверы PCI-E и HGX SXM" },
          ]
        },
        {
          title: "Импортозамещение:",
          links: [
            { id: 7, name: "Depo" },
            { id: 8, name: "Qtech" },
            { id: 9, name: "NEBO Systems" },
          ]
        }
      ]
    },
    {
      title: "Системы хранения данных",
      sections: [
        {
          title: "СХД ведущих производителей:",
          links: [
            { id: 10, name: "Huawei" },
            { id: 11, name: "Dell" },
            { id: 12, name: "HP" },
            { id: 13, name: "Lenovo" },
            { id: 14, name: "Hitachi" },
            { id: 15, name: "NetApp" },
          ]
        },
        {
          title: "СХД Российских производителей:",
          links: [
            { id: 16, name: "Depo" },
            { id: 17, name: "NEBO Systems" },
          ]
        }
      ]
    },
    {
      title: "Сетевое оборудование",
      sections: [
        {
          title: "Оборудование лидеров рынка:",
          links: [
            { id: 18, name: "Huawei" },
            { id: 19, name: "Cisco" },
            { id: 20, name: "Juniper" },
            { id: 21, name: "Brocade" },
            { id: 22, name: "Mellanox" },
            { id: 23, name: "H3C" },
          ]
        },
        {
          title: "Телекоммуникационное оборудование:",
          links: [
            { id: 24, name: "QTech" },
          ]
        }
      ]
    }
  ]

  return (
    <section className="sticky top-[90px] min-h-dvh z-2 bg-white flex flex-col items-center justify-center">
      <div>
        <h2 className="text-brand-normal text-center font-bold text-3xl md:text-5xl lg:text-[62px] xl:text-[71px] 2xl:text-[79px] leading-[normal]">
        Поставка IT-оборудования
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-[89px]">
        {cardsData.map((card, cardIndex) => (
          <Card className="group/card pt-11 pb-8" key={cardIndex} title={card.title}>
            {card.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
                <h4 className="italic text-lg mb-4">{section.title}</h4>
                <div className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <LinkItem name={link.name} href="#" key={link.id} />
                  ))}
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ITEquipmentSupply