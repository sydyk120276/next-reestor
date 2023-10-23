import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import "../../src/app/globals.css";

import Header from "../../src/app/components/Header/header";
import Footer from "../../src/app/components/Footer/footer";
import Search from "../../src/app/components/search";

import ImageViewerCheckbox from "../../src/app/components/ImageViewer/ImageViewerCheckbox";
import imagePravo from "../../src/app/utils/examples/imagePravo";
import imageCadastr from "../../src/app/utils/examples/imageCadastr";
import imageUchastokCheckbox from "../../src/app/utils/checkbox/imageUchastokCheckbox";
import imageReports from '../../src/app/utils/examples/imageReports'
import imageCheck from '../../src/app/utils/examples/imageCheck'

export default function RootLayout({ object }) {
  const [fullNameRosreestr, setFullNameRosreestr] = useState("");
  const [count, setCount] = useState(0);
  const [right, setRight] = useState([]);

  const [visibled, setVisibled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [items, setItems] = useState([
    {
      name: "Отчет о переходе прав",
      price: 350,
      checked: false,
      report: imagePravo,
      desc: "Справка о том, что по данному объекту недвижимости нет записей о зарегистрированных правах.",
      titleModalka: "Отчет о переходе прав на объект недвижимости",
      image: '/img/report_checkbox/report_1.png',
      descModalka: "",
      listModalka: [
        "Вид собственников (юридическое или физическое лийцо)",
        "Доля в праве собственности",
        "Вид права собственности",
        "Количество собственников",
        "Полная история собственников",
        "Даты регистрации прав",
        "Даты прекращения прав",
      ],
    },
    {
      name: "Отчет об основных характеристиках",
      price: 690,
      checked: false,
      report: imageUchastokCheckbox,
      desc: "Общая информация об объекте недвижимости, вид собственника (юридическое или физическое лицо), наличие или отсутствие ограничений, обременений, арестов.",
      titleModalka: "Отчет об основных о характеристиках объекта недвижимости",
      descModalka: "",
      image: '/img/report_checkbox/report_2.png',
      listModalka: [
        "Площадь квартиры",
        "Назначение)",
        "Кадастровую стоимость квартиры",
        "Вид собственника (юридическое или физическое лицо)",
        "Вид права собственности и дату его регистрации (может отсутствовать)",
        "Информация о дееспособности владельца (может отсутствовать)",
        "Данные об аресте, залоге, других обременениях (при их наличии)",
        "Дата регистрации права",
      ],
    },
    {
      name: "Сведения о собственниках",
      price: 3500,
      checked: false,
      report: imageReports,
      desc: "Полная история собственников с 1998 года, включая ФИО. Если наличие ФИО собственника не приницпиально, а важно знать количество фактов смены сосбтвенников объекта недвижимости, достаточно заказать 'Отчет о переходе прав'.",
      titleModalka: "Отчет об основных о характеристиках объекта недвижимости",
      descModalka: "",
      image: '/img/report_checkbox/report_3.png',
      listModalka: [
        "ФИО собственников",
        "Доля в праве собственности",
        "Вид права собственности",
        "Количество собственников",
        "Полная история собственников",
        "Даты регистрации прав",
        "Назначение и вид",
        "Даты прекращения прав",
      ],
    },
    {
      name: "Справка о кадастровой стоимости",
      price: 320,
      checked: false,
      report: imageCadastr,
      desc: "Стоимость объекта недвижимости, установленная в процессе государственной кадастровой оценки.",
      titleModalka: "Отчет об основных о характеристиках объекта недвижимости",
      descModalka: "Справка о кадастровой стоимости необходима для определения размера налога на имущество, оформления субсидий, получения кредита в банке, а так же для предъявления в иные государственные учреждения по требованию.",
      image: '/img/report_checkbox/report_4.png',
      listModalka: [],
    },
    {
      name: "Комплексная проверка",
      price: 5500,
      checked: false,
      report: imageCheck,
      desc: "Сводный отчет по результатам проверки объекта недвижимости на арест, обременения, залог и проверки собственника (физическое лицо) на наличие задолженностей, нахождение в базе данных розыска, в реестре судебных дел и реестре банкротств.",
      titleModalka: "Отчет об основных о характеристиках объекта недвижимости",
      descModalka: "Комплексная проверка объекта недвижимости на предмет наличие ограничений (обременений) и собственника (собственников) ФЛ на наличие задолженностей, нахождение в базе данных розыска, должников, в реестре судебных дел и банкротств.Не производится проверка объектов недвижимости, собственниками которых являются юридические лица.",
      image: '/img/report_checkbox/report_5.png',
      listModalka: [
        "Единый Государственный Реестр Недвижимости (ЕГРН)",
        "Министерство внутренних дел (МВД)",
        "Федеральная служба судебных приставов (ФССП)",
        "Федеральная служба исполнения наказаний (ФСИН)",
        "Единый федеральный реестр сведений о банкротстве (ЕФРСБ)",
        "Единый федеральный реестр сведений о банкротстве (ЕФРСБ)",
        "Федеральная нотариальная палата (ФНП)",
        "Данные из арбитражных судов и судов общей юрисдикции",
      ],
    },
  ]);
  const [servicesEncumbrances, setServicesEncumbrances] = useState([
    {
      name: "Уведомление об отсутствии прав",
      price: 350,
      checked: false,
      report: "",
      desc: "Справка о том, что по данному объекту недвижимости нет записей о зарегистрированных правах.",
      titleModalka: "Уведомление об отсутствии прав",
      image: '/img/report_checkbox/report_1.png',
      descModalka: "В случае, если в отсутствуют запрашиваемые сведения, выдается Уведомление об отсутствии запрашиваемых сведений. Уведомление необходимо для предоставления по месту требования отчета о переходе прав на объект недвижимости.",
      listModalka: [],
    },
    {
      name: "Отчет об основных характеристиках",
      price: 690,
      checked: false,
      report: imageUchastokCheckbox,
      desc: "Общая информация об объекте недвижимости, вид собственника (юридическое или физическое лицо), наличие или отсутствие ограничений, обременений, арестов.",
      titleModalka: "Отчет об основных о характеристиках объекта недвижимости",
      descModalka: "",
      image: '/img/report_checkbox/report_2.png',
      listModalka: [
        "Площадь квартиры",
        "Назначение)",
        "Кадастровую стоимость квартиры",
        "Вид собственника (юридическое или физическое лицо)",
        "Вид права собственности и дату его регистрации (может отсутствовать)",
        "Информация о дееспособности владельца (может отсутствовать)",
        "Данные об аресте, залоге, других обременениях (при их наличии)",
        "Дата регистрации права",
      ],
    },
    {
      name: "Справка о кадастровой стоимости",
      price: 320,
      checked: false,
      report: imageCadastr,
      desc: "Стоимость объекта недвижимости, установленная в процессе государственной кадастровой оценки.",
      titleModalka: "Отчет об основных о характеристиках объекта недвижимости",
      descModalka: "Справка о кадастровой стоимости необходима для определения размера налога на имущество, оформления субсидий, получения кредита в банке, а так же для предъявления в иные государственные учреждения по требованию.",
      image: '/img/report_checkbox/report_4.png',
      listModalka: [],
    },
  ]);
  const [activeModalka, setActiveModalka] = useState(
    Array(items.length).fill(false)
  );

  // Функция для обновления состояния элемента по его индексу
  const updateItem = (index, checked) => {
    const updatedItems = [...items];
    updatedItems[index].checked = checked;
    setItems(updatedItems);

    // Проверьте, все ли элементы в списке отмечены
    const allChecked = updatedItems.some((item) => item.checked);
    setIsChecked(allChecked);
  };

  // Вычисление общей суммы выбранных элементов
  const totalAmount = items.reduce(
    (total, item) => (item.checked ? total + item.price : total),
    0
  );

  // Функция для обновления состояния элемента по его индексу
  const updateItemEncumbrances = (index, checked) => {
    const updatedItems = [...servicesEncumbrances];
    updatedItems[index].checked = checked;
    setServicesEncumbrances(updatedItems);

    // Проверьте, все ли элементы в списке отмечены
    const allChecked = updatedItems.some((item) => item.checked);
    setIsChecked(allChecked);
  };

  // Вычисление общей суммы выбранных элементов
  const totalAmountEncumbrances = servicesEncumbrances.reduce(
    (total, item) => (item.checked ? total + item.price : total),
    0
  );

  const handleOrderButtonClick = () => {
    setVisibled(true);
    setCount(count + 1);
  };
  const handleOrderClick = () => {
    setVisibled(false);
  };

  // Создайте массив selectedItems, содержащий только выбранные элементы
  const selectedItems = items.filter((item) => item.checked);

  const cadastrObject = JSON.parse(object) || object;

  // console.log("cadastrObject", cadastrObject);

  const router = useRouter();
  const Number = router.query.number;
  console.log("router.query", router.query);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const full_name = localStorage.getItem("full_name");
      if (full_name) {
        setFullNameRosreestr(full_name);
      }
    }
  }, []);

  // console.log("fullNameRosreestr", fullNameRosreestr);

  // Создаем объект Date, представляющий текущую дату и время
  const currentDate = new Date();

  // Извлекаем данные о дне, месяце и годе
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
  const year = currentDate.getFullYear();

  // Формируем строку с текущей датой
  const formattedDate = `${day}.${month}.${year}`;

  const handlerModalka = (index) => {
    const updatedModalka = [...activeModalka];
    updatedModalka[index] = !updatedModalka[index];
    setActiveModalka(updatedModalka);
  };

  const closeModalka = (index) => {
    const updatedModalka = [...activeModalka];
    updatedModalka[index] = false;
    setActiveModalka(updatedModalka);
  };

  useEffect(() => {
    axios(`/api/findId?cadNumber=${Number}`)
    .then(({ data }) =>{ 
      if (data.length !== 0) {
        axios(`/api/findRight?objectid=${data}&cadNumber=${Number}`)
        .then(({ data }) => {
          if (data.length !== 0 || data) {
            setRight(data)
          }
          return data
        })
        return data
      }
      else {
        setRight(false)
      }
    })
  }, [Number])

  

  console.log('right....', right)

  const owners = right?.realty?.rights?.filter(el => el.rightState === 1)
  const encumbrances = right?.realty?.encumbrances?.find(elem => elem?.encmbState === 1)
  const dateLoad = owners && owners?.find(el => el?.dateLoad)

  console.log('owners....', owners)
  console.log('dateLoad....', dateLoad)

  return (
    <div className="flex h-full w-full flex-col bg-[#f7f8f8]">
      <Header />
      <div className="container mx-auto xl:max-w-screen-xl flex gap-[5px] items-center mx-auto text-[12px] text-left p-[25px] pl-[0px]">
        <Link href={"/"} className="text-[#4682B4] underline">
          Главная
        </Link>
        <span className="text-[#4682B4]">&gt;</span>
        <span className="text-[#787878]">
          {fullNameRosreestr
            ? fullNameRosreestr
            : cadastrObject?.objectData?.objectAddress?.mergedAddress}
        </span>
      </div>
      <div className="container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
        <Search />
      </div>

      <div className="container relative mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
        <h1 className="text-center text-[#396934] font-[500] text-[30px] p-[25px] border-b-[1px] border-[#dbdbdb]">
          Сведения по объекту{" "}
          {fullNameRosreestr
            ? fullNameRosreestr
            : cadastrObject?.objectData?.addressNote
            ? cadastrObject?.objectData?.addressNote
            : cadastrObject?.objectData?.objectAddress?.mergedAddress}
          , {cadastrObject?.objectData?.objectName} кадастровый номер{" "}
          {cadastrObject?.parcelData?.parcelCn}
        </h1>
        <div className="flex justify-between gap-[50px] mt-[30px] mb-[50px]">
          <div className="flex flex-col grow text-[14px]  ">
            <span className=" p-[7px] bg-white odd:bg-slate-50 even:bg-white rounded-t-[5px]">
              Тип:{" "}
              <strong>
                {cadastrObject?.objectData?.objectName
                  ? cadastrObject?.objectData?.objectName
                  : "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Статус:{" "}
              <strong>
                {cadastrObject?.parcelData?.parcelStatusStr
                  ? cadastrObject?.parcelData?.parcelStatusStr
                  : "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Кадастровый номер:{" "}
              <strong>
                {cadastrObject?.parcelData?.parcelCn
                  ? cadastrObject?.parcelData?.parcelCn
                  : "нет данных"}
              </strong>
            </span>
            <span className="mb-[45px] p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Адрес полный:{" "}
              <strong>
                {fullNameRosreestr ||
                  cadastrObject?.objectData?.addressNote ||
                  cadastrObject?.objectData?.objectAddress?.mergedAddress ||
                  "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Площадь:{" "}
              <strong>
                {cadastrObject?.parcelData?.areaValue
                  ? `${cadastrObject.parcelData.areaValue} м2 (квадратный метр)`
                  : "нет данных"}{" "}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Год постройки:{" "}
              <strong>
                {cadastrObject?.parcelData?.oksYearBuilt ||
                  cadastrObject?.parcelData?.oksYearUsed ||
                  "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Материалы стен:{" "}
              <strong>
                {cadastrObject?.parcelData?.oksElementsConstructStr ||
                  "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Этажность:{" "}
              <strong>
                {cadastrObject?.parcelData?.oksFloors || "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Дата постановки на учёт:{" "}
              <strong>
                {cadastrObject?.parcelData?.dateCreate
                  ? cadastrObject?.parcelData?.dateCreate
                  : "нет данных"}
              </strong>
            </span>
            <span className="mb-[45px] p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Дата обновления информации:{" "}
              <strong>
                {cadastrObject?.firActualDate ||
                  cadastrObject?.objectData?.actualDate ||
                  "нет данных"}
              </strong>
            </span>
            <span className="p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5]">
              Кадастровая стоимость:{" "}
              <strong>
                {cadastrObject?.parcelData?.cadCost
                  ? `${cadastrObject?.parcelData?.cadCost} руб.`
                  : "нет данных"}{" "}
              </strong>
            </span>
            <span className="mb-[35px] p-[7px] bg-white odd:bg-slate-50 even:bg-[#f5f5f5] rounded-b-[5px]">
              Дата определения стоимости:{" "}
              <strong>
                {cadastrObject?.parcelData?.dateCost
                  ? cadastrObject?.parcelData?.dateCost
                  : "нет данных"}
              </strong>
            </span>
            {/* <strong className="mb-[10px]">
              Предварительный расчет налога по общей формуле:{" "}
              <span> 373 руб.</span>
            </strong> */}
            <span className="text-[13px] text-[#aaa] italic">
              Информация выше дублируется из открытых источников и может быть
              устаревшей.
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col bg-[#f5f5f5] p-[20px] rounded-[5px] mb-[20px]">
              <div className="flex items-center text-[11px] mb-[30px]">
                <span className="text-[#979797]">
                  Дата выгрузки {dateLoad?.dateLoad}
                </span>
                <div className="group flex items-center">
                  <button className="relative ml-[30px]">
                    <span className="underline text-[#4682B4]">Обновить</span>
                    <div className="absolute top-[3px] left-[-18px] w-[12px] h-[12px] bg-[url('/img/test__rightblock_refresh.png')] bg-no-repeat bg-cover transition-transform transform rotate-0 group-hover:rotate-180"></div>
                  </button>
                </div>
              </div>
              <div className="flex relative mb-[15px]">
                <div className="absolute top-0  w-[16px] h-[16px] bg-[url('/img/object_right_man.png')] bg-no-repeat bg-cover"></div>
                <span className="text-[15px] pl-[25px] text-[#264d6c] uppercase font-[700] tracking-[0.5px] ">
                  СВЕДЕНИЯ О ВЛАДЕЛЬЦЕ:
                </span>
              </div>
              <span className="text-[16px] mb-[10px]">
                Всего количество владельцев: <strong>{owners?.length}</strong>
              </span>
              {owners && owners.map((owner, index) => (
                <div key={`${owner?.objectCn}${index}`}>
                                <div className="flex items-start my-[5px]">
                <span className="w-[7px] h-[7px] rounded-[10px] bg-[#8796b3] mt-[5px]"></span>
                <span className="text-[#425a87] text-[14px] font-[700] px-[10px]">
                  Владелец №{index + 1}:
                  <a
                    href="#"
                    className="ml-[10px] border-b-[1px] border-[#4667a3] text-[#2561c4] py-[1px] border-dashed font-[400]"
                  >
                    ***** ФИО в сведениях о собственниках
                  </a>
                </span>
              </div>
              <div className="flex flex-col text-[13px] leading-[18px] mb-[15px] px-[5px]">
                <span className="font-[600] mb-[5px]">Свидетельство о регистрации:</span>
                  <p className=" mb-[5px]">№ {owner?.regNmbr}</p>
                   <p className=" mb-[5px]">от {owner?.regDate} (<span className="">{owner?.typeName}</span>)</p>
              </div>
                  </div>
              ))}
              <span className="text-[15px] text-[#264d6c] uppercase font-[700] tracking-[0.5px] mb-[20px]">
                АРЕСТ, ОБРЕМЕНЕНИЯ И ЗАЛОГ:
              </span>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
                <span className="font-[700]">
                  Наличие обременений:{" "}
                  <span className="font-[400]"> 
                  {encumbrances ? <span className="text-red-500">Возможны ограничения</span> : <span className="text-[#3faa29]">Не зарегистрированы на момент запроса</span>} 
                  </span>
                </span>
              </div>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
              <span className="font-[700]">Наличие арестов:</span>
              {encumbrances ? 
              <span className="text-red-500">Требуется проверка</span> : 
                <div className="flex">
                  <span className="font-[400]"> данные по запросу</span>
                
                <img
                  src="/img/object_right_warning.png"
                  alt="object_right_warning"
                  width={15}
                  height={15}
                />
                </div>
              } 
              </div>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
              <span className="font-[700]">Регистрационный номер:</span>
              {encumbrances ? 
              <span className="">{encumbrances?.regNmbr}</span> : 
                <div className="flex">
                  <span className="font-[400]"> данные по запросу</span>
                
                <img
                  src="/img/object_right_warning.png"
                  alt="object_right_warning"
                  width={15}
                  height={15}
                />
                </div>
              } 
              </div>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
              <span className="font-[700]">Дата регистрации обременения:</span>
              {encumbrances ? 
              <span className="">{encumbrances?.regDate}</span> : 
                <div className="flex">
                  <span className="font-[400]"> данные по запросу</span>
                
                <img
                  src="/img/object_right_warning.png"
                  alt="object_right_warning"
                  width={15}
                  height={15}
                />
                </div>
              } 
              </div>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
                <span className="font-[700]">
                Дополнительные сведения:{" "}
                  <span className="font-[400]"> данные по запросу</span>
                </span>
                <img
                  src="/img/object_right_warning.png"
                  alt="object_right_warning"
                  width={15}
                  height={15}
                />
              </div>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
                <span className="font-[700]">
                Причина:{" "}
                  <span className="font-[400]"> данные по запросу</span>
                </span>
                <img
                  src="/img/object_right_warning.png"
                  alt="object_right_warning"
                  width={15}
                  height={15}
                />
              </div>
              <div className="flex text-[13px] gap-[5px] items-start mb-[15px]">
                <span className="font-[700]">
                Кем наложено ограничение:{" "}
                  <span className="font-[400]"> данные по запросу</span>
                </span>
                <img
                  src="/img/object_right_warning.png"
                  alt="object_right_warning"
                  width={15}
                  height={15}
                />
              </div>
              <p className="text-[#979797] text-[11px] text-center">
                Единая Информационная база
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px] mb-[20px]"
            >
              <img
                src="/img/order-description.png"
                alt="object_right_warning"
                width={24}
                height={24}
              />
              <span className=""> Заказать отчёты на объект &gt;</span>
            </a>
          </div>
        </div>
        {!visibled && (
          <div className="flex flex-col">
            <div className="flex justify-between pb-[20px] border-b-[1px] border-[#919191]">
              <h2 className="text-[18px] font-[600]">
                Выберите необходимые услуги для заказа:{" "}
              </h2>
              <span className="text-[#919191] text-[16px]">Шаг 1/2:</span>
            </div>
          {owners && owners.length > 0 ? servicesEncumbrances.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-[20px] border-b-[1px] border-[#919191] hover:bg-[#f4fcf5] ${
                item.checked ? "bg-[#f7fbfe]" : ""
              }`}
            >
              <div className="flex w-[90%] justify-between gap-[10px]">
                <div className="w-[15px] h-[15px] mt-[3px]">
                  <label htmlFor={`checkbox-${index}`}></label>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={item.name}
                    price={item.price}
                    className="w-[100%] h-[100%]"
                    checked={item.checked}
                    onChange={(e) => updateItemEncumbrances(index, e.target.checked)}
                  />
                </div>
                <div className="flex w-[80%] flex-col gap-[10px]">
                  <span className="text-[#143e72] font-[600] text-[14px]">
                    {item.name}
                  </span>
                  <span className="text-[#9e9e9e] font-[600] text-[14px]">
                    {item.desc}
                  </span>

                  <span className="text-[#9e9e9e] text-[12px]">
                    Стоимость - {item.price} р., Сроки: 1-7 дней | Формат PDF
                    | ЭЦП
                  </span>
                </div>
                <div className="flex gap-[5px]">
                  <button
                    className="flex flex-col gap-[10px] "
                    onClick={() => handlerModalka(index)}
                  >
                    <img
                      className="h-[80px] w-[80px] shadow-lg shadow-[#f7fffa]-500"
                      src={item.image}
                      alt="report_2"
                      width={18}
                      height={18}
                    />
                    <div className="flex gap-[10px]">
                      <span className="font-[500] text-[#143e72] text-[12px]">
                        смотреть описание
                      </span>
                      <img
                        className="h-[18px] w-[18px] "
                        src="/img/order-description.png"
                        alt="order-description"
                        width={18}
                        height={18}
                      />
                    </div>
                  </button>
                </div>

                {activeModalka[index] && (
                  <>
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
                    <div className="fixed inset-0 flex items-center justify-center p-[15px] ">
                      <div className="relative w-[700px] min-h-[350px] bg-white rounded-lg shadow-lg">
                        <button
                          type="button"
                          class="absolute top-[10px] right-[10px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => closeModalka(index)}
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                        </button>
                        <div className="p-6 space-y-6">
                          <span className="text-[18px] font-[600] text-center">
                            {item.titleModalka}
                          </span>
                          <div className="flex gap-6">
                            <div className="flex flex-col gap-6 grow">
                              <span className="text-[#4682B4] font-[600] text-[14px] border-b-[2px] border-[#dcdcdc] text-center">
                                Что содержит:
                              </span>
                              <ul className="examples__list text-[13px] italic">
                                {item.listModalka.map((elem, index) => (
                                  <li key={`${elem}${index}`}>{elem}</li>
                                ))}
                              </ul>
                              <span className="text-[13px]">{item.descModalka}</span>
                            </div>
                            {item.report === "" ? "" :                             <div className="flex flex-col gap-6 w-1/3">
                              <span className="text-[#4682B4] font-[600] text-[14px] border-b-[2px] border-[#dcdcdc] text-center">
                              Образец:
                              </span>
                              <div className="flex items-center justify-center">
                                <ImageViewerCheckbox imagePaths={item.report} closeModalka={() => closeModalka(index)} />
                              </div>
                            </div>}

                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <span className="text-[#143e72] text-[20px]">
                {item.price} р.
              </span>
            </div>
          )) :
          items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-[20px] border-b-[1px] border-[#919191] hover:bg-[#f4fcf5] ${
                item.checked ? "bg-[#f7fbfe]" : ""
              }`}
            >
              <div className="flex w-[90%] justify-between gap-[10px]">
                <div className="w-[15px] h-[15px] mt-[3px]">
                  <label htmlFor={`checkbox-${index}`}></label>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={item.name}
                    price={item.price}
                    className="w-[100%] h-[100%]"
                    checked={item.checked}
                    onChange={(e) => updateItem(index, e.target.checked)}
                  />
                </div>
                <div className="flex w-[80%] flex-col gap-[10px]">
                  <span className="text-[#143e72] font-[600] text-[14px]">
                    {item.name}
                  </span>
                  <span className="text-[#9e9e9e] font-[600] text-[14px]">
                    {item.desc}
                  </span>

                  <span className="text-[#9e9e9e] text-[12px]">
                    Стоимость - {item.price} р., Сроки: 1-7 дней | Формат PDF
                    | ЭЦП
                  </span>
                </div>
                <div className="flex gap-[5px]">
                  <button
                    className="flex flex-col gap-[10px] "
                    onClick={() => handlerModalka(index)}
                  >
                    <img
                      className="h-[80px] w-[80px] shadow-lg shadow-[#f7fffa]-500"
                      src={item.image}
                      alt="report_2"
                      width={18}
                      height={18}
                    />
                    <div className="flex gap-[10px]">
                      <span className="font-[500] text-[#143e72] text-[12px]">
                        смотреть описание
                      </span>
                      <img
                        className="h-[18px] w-[18px] "
                        src="/img/order-description.png"
                        alt="order-description"
                        width={18}
                        height={18}
                      />
                    </div>
                  </button>
                </div>

                {activeModalka[index] && (
                  <>
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
                    <div className="fixed inset-0 flex items-center justify-center p-[15px] ">
                      <div className="relative w-[700px] min-h-[350px] bg-white rounded-lg shadow-lg">
                        <button
                          type="button"
                          class="absolute top-[10px] right-[10px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => closeModalka(index)}
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                        </button>
                        <div className="p-6 space-y-6">
                          <span className="text-[18px] font-[600] text-center">
                            {item.titleModalka}
                          </span>
                          <div className="flex gap-6">
                            <div className="flex flex-col gap-6 grow">
                              <span className="text-[#4682B4] font-[600] text-[14px] border-b-[2px] border-[#dcdcdc] text-center">
                                Что содержит:
                              </span>
                              <ul className="examples__list text-[13px] italic">
                                {item.listModalka.map((elem, index) => (
                                  <li key={`${elem}${index}`}>{elem}</li>
                                ))}
                              </ul>
                              <span className="text-[13px]">{item.descModalka}</span>
                            </div>
                            <div className="flex flex-col gap-6 w-1/3">
                              <span className="text-[#4682B4] font-[600] text-[14px] border-b-[2px] border-[#dcdcdc] text-center">
                              Образец:
                              </span>
                              <div className="flex items-center justify-center">
                                <ImageViewerCheckbox imagePaths={item.report} closeModalka={() => closeModalka(index)} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <span className="text-[#143e72] text-[20px]">
                {item.price} р.
              </span>
            </div>
          )) 
          }

            <div className="flex justify-between items-center mt-[20px]">
              <span className="text-[18px]">
                Итого сумма: {totalAmount} руб.
              </span>
              <button
                className={
                  "flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px] cursor-pointer"
                }
                style={{ opacity: isChecked ? 1 : 0.5 }}
                disabled={!isChecked}
                onClick={handleOrderButtonClick}
              >
                Заказать отчёты на объект &gt;
              </button>
            </div>
          </div>
        )}
        {visibled && (
          <div className="flex flex-col mt-[30px]">
            <div className="flex justify-between pb-[20px] w-[40%] ">
              <h2 className="text-[18px] font-[600]">
                Введите данные для получения заказа:{" "}
              </h2>
              <span className="text-[#919191] text-[16px]">Шаг 2/2:</span>
            </div>
            <div className="flex justify-between gap-[50px] mt-[20px] ">
              <form className="w-[100%]">
                <label className="text-[#000] text-[15px] font-[700] ">
                  Куда отправить документы:
                </label>
                <div className="relative my-[10px]">
                  <input
                    className=" w-[100%] z-10 border-[1px] border-[#dcdcdc] bg-[#f2f3f6] text-[14px]  h-[56px] p-[20px] rounded-[5px] "
                    type="text"
                    placeholder="Введите ваш E-mail"
                  />
                  <img
                    className="absolute z-20 top-[20px] right-[10px]"
                    src="/img/envelope.png"
                    alt="envelope"
                    width={21}
                    height={15}
                  />
                </div>
                <div className="flex gap-[5px] items-center text-[11px]">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="happy"
                    name="happy"
                    value="yes"
                  />
                  <label htmlFor="happy" className="text-[#878787]">
                    Я согласен с{" "}
                  </label>
                  <Link
                    href="/privacy-policy"
                    className="border-b-[1px] border-[#4667a3] text-[#000] border-dashed font-[400]"
                  >
                    политикой конфиденциальности
                  </Link>
                  <span className="text-[#878787]">и</span>
                  <Link
                    href="/public-offer"
                    className="border-b-[1px] border-[#4667a3] text-[#000] border-dashed font-[400]"
                  >
                    договором оферты
                  </Link>
                </div>
                <div className="flex justify-between items-center mt-[20px]">
                  <button
                    onClick={handleOrderClick}
                    className="flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px]"
                  >
                    <span className="">&lt; Вернуться назад</span>
                  </button>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-[10px] bg-[#4682B4] text-[#fff] p-[15px] rounded-[5px]"
                  >
                    <span className="">
                      {" "}
                      Оплатить заказ - {totalAmount} р. &gt;
                    </span>
                  </a>
                </div>
                <div className="flex flex-col gap-[5px] mt-[20px] text-[13px]">
                  <span>
                    <strong className="text-[16px]">Удобно.</strong>Вы получите
                    отчет в удобном человекочитаемом формате PDF, который можно
                    сразу распечатать.
                  </span>
                  <span>
                    <strong className="text-[16px]">Безопасно.</strong>Если по
                    каким-то причинам невозможно предоставить документ,
                    гарантируем 100% возврат денежных средств.
                  </span>
                  <span>
                    <strong className="text-[16px]">Выгодно.</strong>Потратив
                    нсущественную сумму на отчет, вы обезопасите себя от
                    поспешных сделок, сэкономите время и деньги
                  </span>
                </div>
              </form>
              <div className="w-[100%] flex flex-col ">
                <div className="flex flex-col bg-[#f7f6f2] rounded-t-[10px] shadow-[0_50px_24px_-2px_rgba(0,0,0,0.3)] shadow-[#f7fffa]-500 p-[30px]">
                  <div className="flex justify-between text-[#adaba7] text-[9px] mb-[20px] ">
                    <span>ID {count}K76JH-23</span>
                    <span>{formattedDate}</span>
                  </div>
                  <span className="text-[#000000] text-[13px] font-[700] mb-[15px]">
                    Кадастровый номер:{" "}
                    <strong>
                      {cadastrObject?.parcelData?.parcelCn
                        ? cadastrObject?.parcelData?.parcelCn
                        : "нет данных"}
                    </strong>
                  </span>
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    {selectedItems.map((item, index) => (
                      <div className="flex justify-between py-[5px] border-b-[2px]">
                        <span key={index} className="text-[13px]">
                          {item.name}
                        </span>
                        <span className="text-[14px]">{item.price} р.</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <span className=" mb-[30px] text-[18px]">
                      Итого:
                      .....................................................................{" "}
                    </span>
                    <span>{totalAmount} р.</span>
                  </div>

                  <div className="w-[100%] h-[1px] bg-[url('/img/oform-recip-line.png')]"></div>
                  <div className="flex justify-between text-[#adaba7] text-[10px] mt-[10px] ">
                    <span className="text-[#000]">ЗАЯВКА №{count}K76JH-23</span>
                    <span className="text-[#cdcbc4] uppercase">reestr.net</span>
                  </div>
                </div>
                <div className="relative w-[100%] h-[40px] mb-[20px]">
                  <img
                    className="absolute top-0 left-0 w-[100%]"
                    src="/img/oform-recip-footer.png"
                    alt="oform-recip-footer"
                    width=""
                    height={38}
                  />
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
        )}
        <div className="mt-[30px] flex items-center gap-[15px]">
          <img
            className="h-[22px] w-[26px]"
            src="/img/znak-bezopasnosti.png"
            alt="znak-bezopasnosti"
            width={15}
            height={15}
          />
          <p className="p-[10px] text-[#8a8a8a] text-[13px]">
            Оформление заявки на получение полноценной информации об объектах
            недвижимости и её последующей проверки по базам на наличие ареста,
            долгов и обременений доступно по всем объектам, поставленных на учёт
            в ЕГРН. Данный сервис осуществляет только услугу по юридической
            проверки недвижимости перед покупкой.
          </p>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const number = query.number;
  // console.log("Query parameters:", number);
  // Получите данные с сервера
  const getReestr = await axios(
    `https://mkdfond.ru/api/partner?cadNumber=${number}`
  );
console.log('CADNUMBER', getReestr?.data)
  // Верните данные как свойство props
  return {
    props: {
      object: JSON.stringify(getReestr?.data),
    },
  };
}
