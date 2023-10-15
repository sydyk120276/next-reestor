import { useRouter } from 'next/router'
import Link from "next/link";

import '../../src/app/globals.css'

import Header from '../../src/app/components/Header/header'
import Footer from '../../src/app/components/Footer/footer'
import Search from '../../src/app/components/search'

export default function RootLayout() {
  const router = useRouter()
  const Number = router.query.number
  console.log('router.query', router.query)

    return (
      <div className="flex min-h-screen flex-col bg-[#f7f8f8]">
        <Header />
        <div className="container flex gap-[5px] items-center max-1280 text-[12px] text-left p-[25px] pl-[0px]">
          <Link href={'/'} className='text-[#4682B4] underline'>Главная</Link>
          <span className='text-[#4682B4]'>&gt;</span>
          <span className='text-[#787878]'>{Number}</span>
        </div>
        <div className="container max-1280 bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
        <Search />
        </div>
        <div className="container max-1280 bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
          <h1 className="text-center text-[#396934] font-[500] text-[30px] p-[25px] border-b-[1px] border-[#dbdbdb]">Сведения по объекту Иркутская обл , Иркутский р-н , с Оек - кадастровый номер 38:06:010701:4171</h1>
         <div className='flex justify-around items-center mt-[30px] mb-[50px]'>
          <div className='flex flex-col text-[14px]'>
            <span className=' mb-[7px]'>Тип: <strong>земельный участок</strong></span>
            <span className='mb-[7px]'>Статус: <strong>ранее учтенный</strong></span>
            <span className='mb-[7px]'>Кадастровый номер: <strong>38:06:010701:4171</strong></span>
            <span className='mb-[7px]'>Регион:: <strong>Иркутская область</strong></span>
            <span className='mb-[7px]'>Кадастровый район: <strong>Иркутский кадастровый район</strong></span>
            <span className='mb-[7px]'>Адрес полный: <strong>Иркутская обл , Иркутский р-н , с Оек</strong></span>
            <span className='mb-[25px]'>Адрес по документам: <strong>Иркутская область, Иркутский район</strong></span>
            <span className='mb-[7px]'>Площадь: <strong>800,00 м2 (квадратный метр)</strong></span>
            <span className='mb-[7px]'>По документу числится: <strong>для ведения личного подсобного хозяйства</strong></span>
            <span className='mb-[7px]'>Категория земель: <strong>земли сельскохозяйственного назначения</strong></span>
            <span className='mb-[7px]'>Дата постановки на учёт: <strong>17.05.2016</strong></span>
            <span className='mb-[25px]'>Дата обновления информации: <strong>11.01.2023</strong></span>
            <span className='mb-[7px]'>Кадастровая стоимость: <strong>372 584 руб.</strong></span>
            <span className='mb-[7px]'>Дата определения стоимости: <strong>01.01.2022</strong></span>
            <span className='mb-[7px]'>Дата внесения стоимости в базу: <strong>10.01.2023</strong></span>
            <strong className='mb-[20px]'>Предварительный расчет налога по общей формуле:  <span> 373 руб.</span></strong>
            <smal className="text-[13px] text-[#aaa] italic">Информация выше дублируется из открытых источников и может быть устаревшей.</smal>
          </div>
          <div className="flex flex-col">
          <div className='flex flex-col bg-[#f5f5f5] p-[20px] rounded-[5px] mb-[20px]'>
            <div className="flex items-center text-[11px] mb-[30px]">
              <span className="text-[#979797]">Дата выгрузки 12.10.2023 08:23</span>
              <div className='group flex items-center'>
              <button className="relative ml-[30px]">
                <span className="underline text-[#4682B4]">Обновить</span>
                <div className="absolute top-[3px] left-[-18px] w-[12px] h-[12px] bg-[url('/img/test__rightblock_refresh.png')] bg-no-repeat bg-cover transition-transform transform rotate-0 group-hover:rotate-180"></div>
              </button>
              </div>
            </div>
            <div className='flex relative mb-[25px]'>
                <div className="absolute top-0  w-[16px] h-[16px] bg-[url('/img/object_right_man.png')] bg-no-repeat bg-cover"></div>
                <span className="text-[15px] pl-[25px] text-[#264d6c] uppercase font-[700] tracking-[0.5px] ">СВЕДЕНИЯ О ВЛАДЕЛЬЦЕ:</span>
            </div>
            <span className="text-[16px] mb-[25px]">Всего количество владельцев: <strong>1</strong></span>
            <div className="flex items-start mb-[15px]">
              <span className="w-[7px] h-[7px] rounded-[10px] bg-[#8796b3] mt-[5px]"></span>
              <span className="text-[#425a87] text-[14px] font-[700] px-[5px]">Владелец №1:<a href="#" className="ml-[10px] border-b-[1px] border-[#4667a3] text-[#2561c4] py-[1px] border-dashed font-[400]">***** ФИО скрыто (ФЗ 218)</a></span>
            </div>
            <div className="flex flex-col text-[13px] leading-[18px] mb-[30px] px-[5px]">
              <span className="font-[600]">Свидетельство о регистрации:</span>
              <span>№ **:**:010701:*17*-38/**<br />
                от 25.08.2021(Собственность)</span>
            </div>
            <span className="text-[15px] text-[#264d6c] uppercase font-[700] tracking-[0.5px] mb-[30px]">АРЕСТ, ОБРЕМЕНЕНИЯ И ЗАЛОГ:</span>
            <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
              <span className='font-[700]'>Арест и ограничения: <span className='font-[400]'> данные по запросу</span></span>
              <img src="/img/object_right_warning.png" alt="object_right_warning" width={15} height={15} />
            </div>
            <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
              <span className='font-[700]'>Наличие залога в банке: <span className='font-[400]'> данные по запросу</span></span>
              <img src="/img/object_right_warning.png" alt="object_right_warning" width={15} height={15} />
            </div>
            <a href="#" className="underline text-[14px] text-[#2561c4] font-[400] mb-[30px]">Проверить на арест и залог</a>
            <p className="text-[#979797] text-[11px] text-center">Единая Информационная база</p>
          </div>
          <a href='#' className='flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px] mb-[20px]'>
          <img src="/img/order-description.png" alt="object_right_warning" width={24} height={24} />
          <span className=''> Заказать отчёты на объект &gt;</span>
          </a>
         </div>
         </div>
         <iframe className="mb-[50px]" src="https://yandex.ru/map-widget/v1/?ll=37.505507%2C55.743522&z=16" width="100%" height="370"
            frameBorder="0">
        </iframe>
        <div className='flex flex-col w-[80%]'>
          <div className='flex justify-between pb-[20px] border-b-[1px] border-[#919191]'>
            <h2 className='text-[18px] font-[600]'>Выберите необходимые услуги для заказа: </h2>
            <span className='text-[#919191] text-[16px]'>Шаг 1/2:</span>
          </div>
          <div className='flex items-center justify-between py-[20px] border-b-[1px] border-[#919191]'>
            <div className='flex'>
            <div className='w-[15px] h-[15px] mt-[3px]'>
              <label htmlFor="checkbox"></label>
              <input type="checkbox" id="checkbox" className='w-[100%] h-[100%] ' />
            </div>
            <div className='flex flex-col pl-[10px] '>
              <span className='text-[#143e72] font-[600] text-[14px]'> Отчёт об основных характеристиках за 2-4 часа </span>
              <div className='flex gap-[10px] text-[12px]'>
                <span className='text-[#9e9e9e]'>Стоимость - 350 р., срок исполнения 2-4 часа </span>
                <div className='flex gap-[5px]'>
                  <a href="#" className='underline font-[500] text-[#143e72]'>смотреть описание</a>
                <img src="/img/order-description.png" alt="order-description" width={18} height={18} />
                </div>
              </div>
            </div>
            </div>
            <span className='text-[#143e72] text-[20px]'>350 р.</span>
          </div>
          <div className='flex items-center justify-between py-[20px] border-b-[1px] border-[#919191]'>
            <div className='flex'>
            <div className='w-[15px] h-[15px] mt-[3px]'>
              <label htmlFor="checkbox"></label>
              <input type="checkbox" id="checkbox" className='w-[100%] h-[100%] ' />
            </div>
            <div className='flex flex-col pl-[10px] '>
              <span className='text-[#143e72] font-[600] text-[14px]'> Отчёт об истории владения объектом за 2 - 4 часа </span>
              <div className='flex gap-[10px] text-[12px]'>
                <span className='text-[#9e9e9e]'>Стоимость - 690 р., срок исполнения 2-4 часа </span>
                <div className='flex gap-[5px]'>
                  <a href="#" className='underline font-[500] text-[#143e72]'>смотреть описание</a>
                <img src="/img/order-description.png" alt="order-description" width={18} height={18} />
                </div>
              </div>
            </div>
            </div>
            <span className='text-[#143e72] text-[20px]'>690 р.</span>
          </div>
          <div className='flex items-center justify-between py-[20px] border-b-[1px] border-[#919191]'>
            <div className='flex'>
            <div className='w-[15px] h-[15px] mt-[3px]'>
              <label htmlFor="checkbox"></label>
              <input type="checkbox" id="checkbox" className='w-[100%] h-[100%] ' />
            </div>
            <div className='flex flex-col pl-[10px] '>
              <span className='text-[#143e72] font-[600] text-[14px]'> Проверка объекта на арест, залог и основные характеристики </span>
              <div className='flex gap-[10px] text-[12px]'>
                <span className='text-[#9e9e9e]'>Стоимость - 320 р., срок исполнения 8-24 час. (макс. 48ч) </span>
                <div className='flex gap-[5px]'>
                  <a href="#" className='underline font-[500] text-[#143e72]'>смотреть описание</a>
                <img src="/img/order-description.png" alt="order-description" width={18} height={18} />
                </div>
              </div>
            </div>
            </div>
            <span className='text-[#143e72] text-[20px]'>320 р.</span>
          </div>
          <div className='flex justify-between items-center mt-[20px]'>
            <span className='text-[18px]'> Итого сумма:  350 руб.</span>
            <a href='#' className='flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px]'>
                <span className=''> Заказать отчёты на объект &gt;</span>
            </a>
          </div>
        </div>
        <div className='flex flex-col mt-[30px]'>
          <div className='flex justify-between pb-[20px] w-[40%] '>
            <h2 className='text-[18px] font-[600]'>Выберите необходимые услуги для заказа: </h2>
            <span className='text-[#919191] text-[16px]'>Шаг 2/2:</span>
          </div>
          <div className='flex justify-between gap-[50px] '>
          <form className='w-[100%]'>
            <label className='text-[#000] text-[15px] font-[700] '>Выберите куда отправить документы:</label>
            <div className='relative my-[10px]'>
            <input className=' w-[100%] z-10 border-[1px] border-[#dcdcdc] bg-[#f2f3f6] text-[14px]  h-[56px] p-[20px] rounded-[5px] ' type="text" placeholder='Введите ваш E-mail' />
            <img className='absolute z-20 top-[20px] right-[10px]' src="/img/envelope.png" alt="envelope" width={21} height={15} />
            </div>
            <div className='flex gap-[5px] items-center text-[11px]'>
             <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes" />
              <label htmlFor="happy" className='text-[#878787]'>Я согласен с </label>
              <a href="#" className="border-b-[1px] border-[#4667a3] text-[#000] border-dashed font-[400]">политикой конфиденциальности</a>
              <span className='text-[#878787]'>и</span>
              <a href="#" className="border-b-[1px] border-[#4667a3] text-[#000] border-dashed font-[400]">договором оферты</a>
            </div>
            <div className='flex justify-between items-center mt-[20px]'>
            <a href='#' className='flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px]'>
                <span className=''>&lt; Вернуться назад</span>
            </a>
            <a href='#' className='flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px]'>
                <span className=''> Оплатить заказ - 350 &gt;</span>
            </a>
          </div>
          </form>
          <div className='w-[100%] flex flex-col '>
            <div className="flex flex-col bg-[#f7f6f2] rounded-t-[10px] shadow-[0_50px_24px_-2px_rgba(0,0,0,0.3)] shadow-[#f7fffa]-500 p-[30px]">
               <div className="flex justify-between text-[#adaba7] text-[9px] mb-[20px] ">
               <span>ID 1000K76JH-23</span>
                <span>12.10.2023</span>
               </div>
               <span className='text-[#000000] text-[13px] font-[700] mb-[15px]'>Кадастровый номер:  38:06:010701:4171</span>
               <span className='text-[13px]'>Отчёт об основных характеристиках за 2-4 часа.............   350 р.</span>               
               <span className='text-[18px] py-[20px]'>Итого: ..................................................... 350 р.</span>
               <div className="w-[100%] h-[1px] bg-[url('/img/oform-recip-line.png')]"></div>
               <div className="flex justify-between text-[#adaba7] text-[10px] mt-[10px] ">
                <span className='text-[#000]'>ЗАЯВКА №1000K76JH-23</span>
                <span className='text-[#cdcbc4] uppercase'>reestr.net</span>
               </div>
            </div>
            <div className="relative w-[100%] h-[40px] mb-[20px]">
            <img className="absolute top-0 left-0 w-[100%]"  src="/img/oform-recip-footer.png" alt="oform-recip-footer" width="" height={38} />
            </div>
            <a href="#" className="p-[20px]">
              <img
                className="w-[158px] h-[23px]"
                src="/img/payments_logos.png"
                alt="payments_logos"
                width={15}
                height={15}
              />
            </a>
          </div>
          </div>
        </div>
        <div className="mt-[30px] flex items-center gap-[15px]">
          <img className="h-[22px] w-[26px]" src="/img/znak-bezopasnosti.png" alt="znak-bezopasnosti" width={15} height={15} />
          <p className="p-[10px] text-[#8a8a8a] text-[13px]"> 
            Оформление заявки на получение полноценной информации об объектах недвижимости и её 
            последующей проверки по базам на наличие ареста, долгов и обременений доступно по всем объектам,
             поставленных на учёт в ЕГРН. Данный сервис осуществляет только услугу по юридической проверки 
             недвижимости перед покупкой. 
          </p>
        </div>
        <div>

        </div>
        </div>
        <Footer />
      </div>
    )
  }