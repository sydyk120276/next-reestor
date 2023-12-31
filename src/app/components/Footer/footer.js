import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2f323c]">
      <div className="container mx-auto xl:max-w-screen-xl py-[25px] px-[25px] mt-[30px]">
        <ul className="flex justify-between mb-[30px] ">
        <div className="flex justify-between items-center">
          <img
            className="w-[77px] h-[78px]"
            src="/img/rosreestr-footer-check.png"
            alt="rosreestr-footer-check"
            width={15}
            height={15}
          />
          <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col">
            <a href="#" className="text-[#fff] text-[14px] uppercase">reestor.net</a>
            <p className="text-[11px] text-[#7d7d7d] leading-[11px]">Сервис проверки недвижимости<br />Является сайтом коммерческой организации</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] text-[#7d7d7d] leading-[11px]">По всем вопросам работы сервиса: </p>
            <span className="text-[#fff] text-[14px]">E-mail:   <a href="mailto:sidikjan@mail.ru">sidikjan@mail.ru</a></span>
          </div>
          </div>

          {/* <div className="flex flex-col">
            <p className="text-[11px] text-[#7d7d7d] leading-[11px]">Тех. отдел 10-00 до 16-00 (будни):</p>
            <span className="text-[#fff] text-[14px]">Телефон:   <a href="tel:+74994500242">+7 (499) 450-02-42</a></span>
          </div> */}
        </div>
          <li className="flex flex-col ">
            <span className="text-[16px] text-[#fff] font-[700] mb-[20px]">
              Онлайн сервисы Реестра:
            </span>
            <Link
              href="/kvartira"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Проверка квартиры
            </Link>
            <Link
              href="/uchastok"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Проверка участка
            </Link>
            <Link
              href="/kadastrovaya_stoimost"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Кадастровая стоимость
            </Link>
            {/* <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Узнайте кадастровую стоимость недвижимости
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Проверка электронного документа
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Проверка готовности заказа
            </Link> */}
          </li>
          {/* <li className="flex flex-col">
            <span className="text-[16px] text-[#fff] font-[700] mb-[20px]">
              Полезное:
            </span>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Перепланировка жилого помещения
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Имущественный вычет - образец декларации
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Снять квартиру с домашними животными
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Затопили соседи: пошаговая инструкция
            </Link>
          </li> */}
          <li className="flex flex-col">
            <span className="text-[16px] text-[#fff] font-[700] mb-[20px]">
              Справочная:
            </span>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Главная
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/agreement"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/public-offer"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Оферта
            </Link>
          </li>
          {/* <li className="flex flex-col">
            <span className="text-[16px] text-[#fff] font-[700] mb-[20px]">
              Помощь:
            </span>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Вопросы и ответы
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Контакты
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Справочная информация
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Документация API
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#bcbcbc] font-[400] mb-[10px]"
            >
              Способы оплаты
            </Link>
          </li> */}
        </ul>
        <a href="#" className="p-[20px]">
          <img
            className="w-[158px] h-[23px]"
            src="/img/payments_logos.png"
            alt="payments_logos"
            width={15}
            height={15}
          />
        </a>
        <div className="pt-[20px] border-t-[2px] border-[#464856] flex justify-center">
        </div>

      </div>
    </footer>
  );
}
