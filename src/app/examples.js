export default function Examples() {
  return (
    <section className="flex  flex-col gap-[20px] container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
      <h2 className="text-[26px] font-[700]">
        Информация и образцы отчетов о проверке недвижимости
      </h2>
      <div className="flex items-center gap-[20px] mb-[15px]">
        <span className="text-[#8f8f8f] text-[14px]">Выберите вид:</span>
        <button className="examples__select is-active">
          Проверка квартиры перед покупокй
        </button>
        <button className="examples__select">
          Проверка земельного участка
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[20px] w-[80%]">
          <h3 className="text-[18px] font-[700]">
            Проверка квартиры перед покупокй
          </h3>
          <span className="leading-[18px] text-[14px]">
            Отчет о проверки на квартиру необходим при покупке жилья на
            вторичном рынке. Позволяет удостовериться и проверить реального
            собственника на предмет владения имуществом. Образец находится
            справа.
          </span>
          <p className="text-[13px] font-[700]">
            Срок исполнения: 12-24 ч (сроки зависят от загруженности базы){" "}
            <br /> Формат: Электронный документ в формате PDF
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <button className="relative w-[118px] h-[185px] examples__zoom">
              <img
                className=""
                src="/img/example_full_1_n.png"
                alt="example_full_1_n"
                width={15}
                height={15}
              />
            </button>
            <button className="relative w-[118px] h-[185px] examples__zoom">
              <img
                className=""
                src="/img/example_full_2_n.png"
                alt="example_full_2_n"
                width={15}
                height={15}
              />
            </button>
          </div>
          <p className="text-[#898989] leading-[14px] text-[11px] text-center">
            образец проверки квартиры (стр 1 и 2)
            <br /> нажмите для увеличения
          </p>
        </div>
      </div>
    </section>
  );
}
