import Link from 'next/link'

import menu from '../../utils/menu'

export default function Nav() {

    return (
      <div className="w-full bg-[#4682B4]">
        <div className="container max-1280 py-[15px] px-[25px]">
            <ul className="flex justify-between">
                {menu.map((elem) => {
                    return (
                        <li key={elem}>
                            <Link href="/" className="text-[13px] text-[#fff] font-[700]">{elem}</Link>
                        </li>
                    )
                })}
                {/* <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Поиск недвижимости</Link>
                </li>
                <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Проверка участка</Link>
                </li>
                <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Проверка квартиры</Link>
                </li>
                <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Кадастровая стоимость</Link>
                </li>
                <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Кадастровая карта</Link>
                </li>
                <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Ответы на вопросы</Link>
                </li>
                <li>
                    <Link href="/" className="text-[13px] text-[#fff] font-[700]">Контакты</Link>
                </li> */}
            </ul>
        </div>
      </div>
    )
  }