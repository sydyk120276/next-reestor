import Link from "next/link";

import Header from "../src/app/components/Header/header";
import Footer from "../src/app/components/Footer/footer";
import Search from "../src/app/components/search";

import ImageViewerAlt from "../src/app/components/ImageViewer/ImageViewerAlt";
import imageCena1 from "../src/app/utils/kadastrovaya_stoimost/cena1";
import imageCena2 from "../src/app/utils/kadastrovaya_stoimost/cena2";
import imageCena3 from "../src/app/utils/kadastrovaya_stoimost/cena3";

import "../src/app/globals.css";

export default function KadastrovaStoimost() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8f8]">
      <Header />
      <div className="container mx-auto xl:max-w-screen-xl flex gap-[5px] items-center mx-auto text-[12px] text-left p-[25px] pl-[0px]">
        <div className="flex flex-col">
          <div className="container mx-auto xl:max-w-screen-xl flex gap-[5px] items-center mx-auto text-[12px] text-left p-[25px] pl-[0px]">
            <Link href="/" className="text-[#4682B4] underline">
              Главная
            </Link>
            <span className="text-[#4682B4]">&gt;</span>
            <span className="text-[#787878]">Кадастровая стоимость</span>
          </div>
          <div className="container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
            <h1 className="text-[26px] font-[700] text-center my-[10px]">
              Выписка о кадастровой стоимости недвижисмости в 2023 году
            </h1>
            <div className="mt-[20px] flex items-center p-[15px] gap-[15px] border-l-[2px] border-[#8fbd8a] bg-[#f7fffa]">
              <p className="p-[10px] text-[#8a8a8a] text-[13px]">
                Выписка о кадастровой стоимости в 2023 году - кадастровый
                документ, необходимый для верного расчета налога на
                недвижимость, формула которого базируется на кадастровой
                стоимости. Порядок проведения государственной кадастровой оценки
                регулируется Федеральным законом «Об оценочной деятельности в
                Российской Федерации» от 29.07.1998.
              </p>
              <img
                className="w-[180px] h-[100px]"
                src="/img/proverit-kvartiru-online.png"
                alt="proverit-kvartiru-online"
                width={15}
                height={15}
              />
            </div>
          </div>
          <Search />
          <div className="container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
            <h2 className="text-[26px] font-[700] my-[20px] text-center">
              Как рассчитать кадастровую стоимость квартиры или участка?
            </h2>
            <p className="text-[16px] font-[600]  mb-[10px]">
              Кадастровая стоимость квартиры или земельного участка определяется
              в ходе государственной кадастровой оценки независимыми оценщиками,
              на основании решения органов власти или местного самоуправления.
              Если государственная кадастровая оценка затруднилась вынести
              заключение, то кадастровая стоимость становится равной рыночной.
            </p>
            <p className="text-[16px] font-[600]  mb-[10px]">
              При рассчете кадастровой стоимости учитываются следующие аспекты:
            </p>
            <ul className="examples__list text-[16px] mb-[20px]">
              <li className="">площадь объекта недвижимости;</li>
              <li>
                рыночная стоимость строительных материалов сооружения (средняя
                на день ввода в эксплуатацию);
              </li>
              <li>наличие или отсутствие коммуникаций;</li>
              <li>территоритальное расположение;</li>
              <li>год постройки;</li>
              <li>развитость инфраструктуры;</li>
              <li>транспортные коммуникации;</li>
            </ul>
            <p className="text-[16px] font-[600]  mb-[20px]">
              С учетом всех вышеперечисленных, а так же других, аспектов,
              кадастровая стоимость старых построек, находящихся в центре, может
              оказаться выше, чем стоимость удаленных новостроек. Однако, в
              подавляющем большинстве случаев, рыночная стоимость в несколько
              раз выше кадастровой.
            </p>
          </div>
          <div className="container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
            <h2 className="text-[26px] font-[700] my-[20px] text-center">
              Если есть необходимость узнать кадастровую стоимость.
            </h2>
            <p className="text-[16px] font-[600]  mb-[10px]">
              Если по месту требования необходимо предоставить справку о
              кадастровой стоимости, то разумно заказать справку заранее,
              воспользовавшись услугами сервиса. Срок годности справки не
              ограничен, но большинство учреждений отказываются принять справку,
              если она старше 30 дней.
            </p>
            <p className="text-[16px] font-[600]  mb-[10px]">
              Если кадастровая цена не определена, необходимо предоставить
              оценщикам:
            </p>
            <ul className="examples__list text-[16px] mb-[20px]">
              <li className="">
                правоустанавливающий документ на недвижимость: свидетельство о
                праве собственности(практически не актуально), выписку из ЕГРН
                или договор соцнайма;
              </li>
              <li>заявление на проведение кадастровой оценки;</li>
              <li>паспортные данные.</li>
            </ul>
            <p className="text-[16px] font-[600]  mb-[10px]">
              Если речь идет о квартире в составе многоквартирного дома, то
              оценщиками сперва оценивается все сооружение целиком, а затем,
              соразмерно площади, кадастровая стоимость квартиры.
            </p>
            <p className="text-[16px] font-[600]  mb-[20px]">
              Для заказа услуги кадастровой оценки объекта недвижимости можно
              обратиться непосредственно в БТИ или заказать услугу через МФЦ,
              оплатив пошлину.
            </p>
          </div>
          <div className="container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
            <h2 className="text-[26px] font-[700] my-[20px] text-center">
              Как узнать кадастровую стоимость по кадастровому номеру бесплатно?
            </h2>
            <div className="flex gap-[30px] items-center mb-[20px]">
              <div className="bg-[url('/img/strelka.png')] bg-contain bg-no-repeat bg-right-bottom text-[16px] font-[600]">
                Кадастровый сервис goskadastr.su позволяет бесплатно получить
                справочные сведения о кадастровой цене для любого объекта
                недвижимости. Для этого необходимо в поисковой форме ввести
                кадастровый номер либо адрес объекта недвижимости. Кадастровый
                номер можно найти в правоустанавливающих документах.
              </div>
              <ImageViewerAlt imagePaths={imageCena1} />
            </div>
            <div className="flex gap-[30px] items-center mb-[20px]">
              <div className="bg-[url('/img/strelka.png')] bg-contain bg-no-repeat bg-right-bottom text-[16px] font-[600]">
                Кадастровый сервис goskadastr.su позволяет бесплатно получить
                справочные сведения о кадастровой цене для любого объекта
                недвижимости. Для этого необходимо в поисковой форме ввести
                кадастровый номер либо адрес объекта недвижимости. Кадастровый
                номер можно найти в правоустанавливающих документах.
              </div>
              <ImageViewerAlt imagePaths={imageCena2} />
            </div>
            <div className="flex gap-[30px] items-center mb-[20px]">
              <div className="bg-[url('/img/strelka.png')] bg-contain bg-no-repeat bg-right-bottom text-[16px] font-[600]">
                Для получения справочной информации о кадастровой стоимости -
                данный вариант является максимально удобным и быстрым. В случае
                если необходимо предоставить выписку о кдастровой стоимости по
                месту требования, ее необходмо заказать
              </div>
              <ImageViewerAlt imagePaths={imageCena3} />
            </div>
            <div className="mt-[50px] flex items-center gap-[15px] p-[15px] border-l-[2px] border-[#8fbd8a] bg-[#f7fffa]">
              <img
                className="h-[22px] w-[26px]"
                src="/img/znak-bezopasnosti.png"
                alt="znak-bezopasnosti"
                width={15}
                height={15}
              />
              <p className="p-[10px] text-[#8a8a8a] text-[13px]">
                Бесплатная информация о кадастровой стоимости объета
                недвижимости носит исключительно информационный характер и может
                отличаться от действительной. Для того, чтобы узнать актуальную
                кадастровую стоимость, необходимо заказать справку о кадастровой
                стоимости объекта недвижимости.
              </p>
            </div>
          </div>
          <div className="container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
            <h2 className="text-[26px] font-[700] my-[20px] text-center">
              Можно ли оспорить кадастровую стоимость?
            </h2>
            <p className="text-[16px] font-[600]  mb-[10px]">
              В некоторых случаях, при проведении кадастровой оценки,
              кадастровая стоимость ооказывается сопоставимой с рыночной, что
              приводит к увеличению налогооблагаемой базы и ищзлишним затратам.
              Это не относится к новостройкам, кадастровая стоимость которых
              может совпадать с рыночной, по причине минимального износа.
            </p>
            <p className="text-[16px] font-[600]  mb-[10px]">
              В подобных случаях понадобятся услуги сторонних оценщиков. Имея на
              руках очтет об оценке недвижимости, правосутанавливающие документы
              можно обратиться в арбитражный суд с иском об оспаривании
              кадастровой стоимости.
            </p>
            <p className="text-[16px] font-[600]  mb-[10px]">
              Следует отметить, что вариантов для рассмотрения оспаривания
              кадастровой стоимости всего два:
            </p>
            <ul className="examples__list text-[16px] mb-[20px]">
              <li className="">
                при проведении государственной кадастровой оценки были
                использованы недостоверные данные;
              </li>
              <li>
                неверна рассчитана рыночная стоимость на момент подсчета
                кадастровой стоимости.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
