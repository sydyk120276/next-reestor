import Link from "next/link";

export default function Services() {
    return (
        <section className="container mx-auto xl:max-w-screen-xl flex flex-col">
        <h3 className="text-center font-[700] text-[20px] p-[25px]">
        Онлайн сервисы для проверки юридической чистоты недвижимости перед покупкой:
        </h3>
        <div className="flex bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px] justify-between">
            <div className="flex gap-[15px] flex-col items-center w-[30%] border-[1px] border-[#d0d0d0] p-[20px] text-center">
            <img
                className="w-[200px] h-[140px]"
                src="/img/services_1.png" 
                alt="services1"
                width={15}
                height={15}
              />
              <span className="text-[16px] leading-[17px] font-[700] text-center">Проверка квартиры при покупке</span>
              <p className="text-[14px] text-[#7a7a7a]">Сервис проверит квартиру на юр. чистоту, наличие залогов, обременений. Наличие права владения и долгов у собственника.</p>
              <Link href={'number/1'} className="text-[13px] font-[700] text-[#4682B4] border-b-[1px] border-[#4682B4]">
                Проверить квартиру онлайн &gt;
              </Link>
            </div>
            <div className="flex gap-[15px] flex-col items-center w-[30%] border-[1px] border-[#d0d0d0] p-[20px] text-center">
            <img
                className="w-[200px] h-[140px]"
                src="/img/services_2.png" 
                alt="services1"
                width={15}
                height={15}
              />
              <span className="text-[16px] leading-[17px] font-[700] text-center">Проверка земельного участка</span>
              <p className="text-[14px] text-[#7a7a7a]">Онлайн проверка земельного участка по кадастровому номеру на залог, арест, информация о собственнике.</p>
              <Link href={'number/1'} className="text-[13px] font-[700] text-[#4682B4] border-b-[1px] border-[#4682B4]">
                Проверить квартиру онлайн &gt;
              </Link>
            </div>
            <div className="flex gap-[15px] flex-col items-center w-[30%] border-[1px] border-[#d0d0d0] p-[20px] text-center">
            <img
                className="w-[200px] h-[140px]"
                src="/img/services_3.png" 
                alt="services1"
                width={15}
                height={15}
              />
              <span className="text-[16px] leading-[17px] font-[700] text-center">Проверка объекта недвижимости, здания, сооружения</span>
              <p className="text-[14px] text-[#7a7a7a]">Проверка объекта недвижимости по кадастровому номеру в режиме онлайн.</p>
              <Link href={'number/1'} className="text-[13px] font-[700] text-[#4682B4] border-b-[1px] border-[#4682B4]">
                Проверить квартиру онлайн &gt;
              </Link>
            </div>
        </div>
        </section>
    )
  }