import { useState } from 'react';
import Modal from 'react-modal';

import ImageViewer from './components/ImageViewer/ImageViewer'
import imageUchastok from './utils/examples/imageUchastok'
import imagePravo from './utils/examples/imagePravo'
import imageCadastr from './utils/examples/imageCadastr'
import imageReports from './utils/examples/imageReports'
import imageCheck from './utils/examples/imageCheck'

Modal.setAppElement('#app');

export default function Examples() {
  const [activeItem, setActiveItem] = useState('Отчет о переходе прав');


  const openSection = (cityName) => {
    setActiveItem(cityName);
  };

    // Функция для обработки клика на кнопку
    function handleButtonClick() {
      openModal('modalID');
    }

  return (
    <section className="flex  flex-col gap-[20px] container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
      <h2 className="text-[26px] font-[700]">
        Информация и образцы отчетов о проверке недвижимости
      </h2>
      <div className="flex items-center gap-[20px] mb-[15px]">
        <span className="text-[#8f8f8f] text-[14px]">Выберите вид:</span>
        <button className={`search-select-item ${activeItem === 'Отчет о переходе прав' ? 'search-select--active' : 'search-select--expand'}`} onClick={() => openSection('Отчет о переходе прав')}>
        Отчет о переходе прав 
        </button> 
        <button className={`search-select-item ${activeItem === 'Отчет о характеристиках' ? 'search-select--active' : 'search-select--expand'}`} onClick={() => openSection('Отчет о характеристиках')}>
        Отчет о характеристиках 
        </button> 
        <button className={`search-select-item ${activeItem === 'Кадастровая стоимость' ? 'search-select--active' : 'search-select--expand'}`} onClick={() => openSection('Кадастровая стоимость')}>
        Кадастровая стоимость 
        </button> 
        <button className={`search-select-item ${activeItem === 'Собственники' ? 'search-select--active' : 'search-select--expand'}`} onClick={() => openSection('Собственники')}>
        Собственники 
        </button> 
        <button className={`search-select-item ${activeItem === 'Комплексная проверка' ? 'search-select--active' : 'search-select--expand'}`} onClick={() => openSection('Комплексная проверка')}>
        Комплексная проверка
        </button>
      </div>
      <div id="Отчет о переходе прав" className={` justify-between ${activeItem === 'Отчет о переходе прав' ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col gap-[20px] w-[80%]">
          <h3 className="text-[22px] font-[700] mb-[10px]">
          Отчет об истории владения - <span className='text-[#4682B4]'>450 р</span> <span className="text-[#b6b1b1] line-through ml-[10px]"> 650</span>
          </h3>
          <div className="flex w-[100%] max-w-[800px] justify-between">
            <div className='flex flex-col gap-[10px] '>
            <span className="leading-[18px] text-[18px] font-[600]">
            Отчет содержит
            </span>
              <ul className='examples__list text-[13px] italic '>
                <li className="">
                Доля в праве
                </li>
                <li>Собственники (физическое или юридическое лицо)</li>
                <li>Количество действующих собственников</li>
                <li>Полная история предыдущих владельцев с 1998 года</li>
                <li>Даты регистрации прав</li>
                <li>Вид права</li>
                <li>Даты прекращения прав</li>
              </ul>
            </div>
            <div className='flex flex-col text-[14px] text-[#7e7a7a] gap-[20px] w-[50%]'>
              <span>
              Отчет на основе выписки об истории владения объектом недвижимого имущества (квартиры, дома, участка) из ЕГРН. 
              Содержит сведения о текущих и бывших собственниках (только вид собственника(ФЗ 218)) 
              с 1998 года, информацию о переходе прав на объект недвижимости. Необходим для проверки недвижимости.
               
              </span>
              <span>
              Чем чаще объект недвижимость меняет собственников, тем больше вероятность нарваться на мошенников.
              </span>
            </div>
          </div>
          <span className='text-[12px] italic text-[#989898] font-[700] text-center mt-[30px] '>Сроки: 1-7 дней | Формат PDF | ЭЦП | 350 рублей</span>
        </div>
        <ImageViewer imagePaths={imagePravo}/>
      </div>
      <div id="Отчет о характеристиках" className={`${activeItem === 'Отчет о характеристиках' ? 'flex items-center' : 'hidden'}`}>
        <div className="flex flex-col gap-[20px] w-[80%]">
          <h3 className="text-[22px] font-[700] mb-[10px]">
            Отчет об основных характеристиках - <span className='text-[#4682B4]'>350 р</span> <span className="text-[#b6b1b1] line-through ml-[10px]"> 450</span>
          </h3>
          <div className="flex w-[100%] max-w-[800px] justify-between">
            <div className='flex flex-col gap-[10px] '>
            <span className="leading-[18px] text-[18px] font-[600]">
            Отчет содержит
            </span>
              <ul className='examples__list text-[13px] italic  '>
                <li className="">
                  Кадастровую стоимость объекта недвижимиости
                </li>
                <li>Вид собственника(физическое или юридическое лицо)</li>
                <li>Обременения, залог, аресты</li>
                <li>Дата регистрации права</li>
                <li>Вид права собственности и дату его регистрации</li>
                <li>Площадь объекта</li>
                <li>Назначение и вид</li>
                <li>Технический план помещения</li>
              </ul>
            </div>
            <div className='flex flex-col text-[14px] text-[#7e7a7a] gap-[20px] w-[50%]'>
              <span>
                Отчет на основе выписки из ЕГРН об основных характеристиках объекта недвижимости. 
                Обязателен для проверки недвижимости перед сделкой и подписанием договора на наличие 
                обременений, залогов и различного рода ограничений.
              </span>
              <span>
                  Позволяет узнать, кто является собственником объекта недвижимости. 
                  В большинстве случаев содержит кадастровый или технический план.
              </span>
            </div>
          </div>
          <span className='text-[12px] italic text-[#989898] font-[700] text-center mt-[30px] '>Сроки: 1-7 дней | Формат PDF | ЭЦП | 350 рублей</span>
        </div>
        <ImageViewer imagePaths={imageUchastok} />
      </div>
      <div id="Кадастровая стоимость" className={` justify-between ${activeItem === 'Кадастровая стоимость' ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col gap-[20px] w-[80%]">
          <h3 className="text-[22px] font-[700] mb-[10px]">
          Справка о кадастровой стоимости - <span className='text-[#4682B4]'>320 р</span> <span className="text-[#b6b1b1] line-through ml-[10px]"> 400</span>
          </h3>
            <div className='flex flex-col text-[16px] gap-[20px] w-[100%]'>
              <span>
              Кадастровая стоимость - рыночная стоимость объекта недвижимости, установленная в процессе
               государственной кадастровой оценки. Справка о кадастровой стоимости необходима для 
               определения размера налога на имущество, оформления субсидий, получения кредита в банке. 
               Срок изготовления справки до 7 рабочих дней.
              </span>
          </div>
          <span className='text-[12px] italic text-[#989898] font-[700] text-center mt-[30px] '>Сроки: 1-7 дней | Формат PDF | ЭЦП | 350 рублей</span>
        </div>
        <ImageViewer imagePaths={imageCadastr} />
      </div>
      <div id="Собственники" className={` justify-between ${activeItem === 'Собственники' ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col gap-[20px] w-[80%]">
          <h3 className="text-[22px] font-[700] mb-[10px]">
          Отчет о собственниках - <span className='text-[#4682B4]'>3500 р</span> <span className="text-[#b6b1b1] line-through ml-[10px]"> 4700</span>
          </h3>
          <div className="flex w-[100%] max-w-[800px] justify-between">
            <div className='flex flex-col gap-[10px] '>
            <span className="leading-[18px] text-[18px] font-[600]">
            Отчет содержит
            </span>
              <ul className='examples__list text-[13px] italic  '>
                <li className="">
                ФИО собственников
                </li>
                <li>Количество собственников</li>
                <li>Полная история собственников</li>
                <li>Даты регистрации прав</li>
                <li>Даты прекращения прав</li>
                <li>Вид права собственности</li>
                <li>Доля в праве собственности</li>
              </ul>
            </div>
            <div className='flex flex-col text-[14px] text-[#7e7a7a] gap-[20px] w-[50%]'>
              <span>
              Отчет о собственниках. Новый отчет, содержащий историю собственников, 
              с 1991 года, включая ФИО и являющийся обязательным для проверки недвижимости 
              перед заключением сделки. По совокупности сведений схож с отчетом о переходе прав.
               Если наличие ФИО собственника не приницпиально, а важно знать количество фактов смены 
               собственников объекта недвижимости, достаточно заказать Отчет о переходе прав.
              </span>
            </div>
          </div>
          <span className='text-[12px] italic text-[#989898] font-[700] text-center mt-[30px] '>Сроки: 1-7 дней | Формат PDF | ЭЦП | 350 рублей</span>
        </div>
        <ImageViewer imagePaths={imageReports} />
      </div>
      <div id="Комплексная проверка" className={` justify-between ${activeItem === 'Комплексная проверка' ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col gap-[20px] w-[80%]">
          <h3 className="text-[22px] font-[700] mb-[10px]">
          Проверка недвижимости и собственников на юридическую чистоту - <span className='text-[#4682B4]'>5500 р</span> <span className="text-[#b6b1b1] line-through ml-[10px]"> 6700</span>
          </h3>
          <div className="flex w-[100%] max-w-[800px] justify-between">
            <div className='flex flex-col gap-[10px] '>
            <span className="leading-[18px] text-[18px] font-[600]">
            Источники информации
            </span>
              <ul className='examples__list text-[13px] italic  '>
                <li className="">
                Единый Государственный Реестр Недвижимости
                </li>
                <li>Федеральная служба исполнения наказаний</li>
                <li>Федеральная нотариальная палата</li>
                <li>Данные из арбитражных судов и судов общей юрисдикции</li>
                <li>Единый федеральный реестр сведений о банкротстве</li>
                <li>Федеральная служба судебных приставов</li>
              </ul>
            </div>
            <div className='flex flex-col text-[14px] text-[#7e7a7a] gap-[20px] w-[50%]'>
              <span>
              Сводный отчет о проверке собственников на наличие в реестре банкротств, розыск, судимости, 
              задолженности, а так же недвижимости на наличие обременений, залога, арестов. Содержит 
              заключение юриста. Необходим для максимально тщательной проверки, как объекта недвижимости, 
              так и собственников перед сделкой.              
              </span>
            </div>
          </div>
          <span className='text-[12px] italic text-[#989898] font-[700] text-center mt-[30px] '>Сроки: 1-7 дней | Формат PDF | ЭЦП | 350 рублей</span>
        </div>
        <ImageViewer imagePaths={imageCheck}/>
      </div>
    </section>
  );
}
