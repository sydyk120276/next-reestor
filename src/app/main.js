"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Link from "next/link";

export default function Main() {
  const [uniqueId, setUniqueId] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [results, setResults] = useState('');
  const [allOptions, setAllOptions] = useState([]); 
  const [searchResults, setSearchResults] = useState([
    {
      number: "77:01:0001027:3584",
      adress: "Москва, пер. Лялин, д. 16",
      type: "помещение",
      square: "598.5",
      data: "2013-05-15",
      owner: "Данные могут отсутствовать",
    },
  ]);



  const handleSearch = () => {
    // Ваша логика для выполнения поиска на основе выбранных опций
    // Здесь вы можете отправить запрос на сервер или выполнить другие действия
    // и обновить searchResults с результатами поиска

    // В этом примере просто обновим searchResults с выбранными опциями
    setSearchResults();
  };

  console.log('selectedOptions',selectedOptions)

  useEffect(() => {
  const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "8784dab37baa389f678420145ffe7e576daa7f3f";
  const query = selectedOptions;
  
  let value = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
  }
  
  fetch(url, value)
  .then(response => response.text())
  .then(result => setResults(result))
  .catch(error => console.log("error", error));
}, [selectedOptions]);
   
      console.log('results', results)

      // let additionalOptions = []

      // if (results) {
      //   const items = JSON.parse(results)
      //   console.log('items',items.suggestions)
      //   additionalOptions = items.suggestions.map((item, index) => ({
      //   label: `${item.value}  подробнее`,
      //   value: index,
      // }));
      
      // console.log('additionalOptions',additionalOptions)
      // }


      // const headerOption = {
      //   value: "header",
      //   label: "Возможно вы ищете:",
      //   isDisabled: true,
      // };
      // const footerOption = {
      //   value: "footer",
      //   label: "Всего найдено совпадений:",
      //   isDisabled: true,
      // };
      
      // let options =
      //   additionalOptions.length > 0
      //     ? [headerOption, ...additionalOptions, footerOption]
      //     : [headerOption, footerOption];

          const customStyles = {
            option: (provided, state) => ({
              ...provided,
              // Применяем пользовательские стили к неактивным опциям
              backgroundColor: state.data.isDisabled ? "#f5f5f5" : "white",
              color: state.data.isDisabled ? "#000" : "black",
            }),
          };

          useEffect(() => {
            // Обновляем состояние всех опций, когда получим результаты
            if (results) {
              const items = JSON.parse(results);
              const additionalOptions = items.suggestions.map((item, index) => ({
                label: `${item.value}  подробнее`,
                value: index,
              }));

              console.log('additionalOptions', additionalOptions)
        
              // const headerOption = {
              //   value: "header",
              //   label: "Возможно вы ищете:",
              //   isDisabled: true,
              // };
              // const footerOption = {
              //   value: "footer",
              //   label: "Всего найдено совпадений:",
              //   isDisabled: true,
              // };
        
              // Обновляем состояние всех опций
              setAllOptions([...additionalOptions]);
            }
          }, [results]);

          console.log('allOptions', allOptions)
          
          const formatOptionLabel = ({ value, label }) => {
            if (value === "header" || value === "footer") {
              return label; // Возвращаем текст как есть для header и footer
            }
            // Разделите текст на две части
            const parts = label.split("  ");
          
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px",
                  borderBottom: "2px solid #f5f5f5",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{parts[0]}</span>
                  <span>{"  " + parts[1]}</span>
                </div>
          
                <span style={{ color: "#2865b7", borderBottom: "1px solid #2865b7" }}>
                  {"  " + parts[2] + ">"}
                </span>
              </div>
            );
          };
          

          useEffect(() => {
            // Генерируйте уникальный id только на клиентской стороне
            const generatedId = `select-${Math.random().toString(36).substr(2, 9)}`;
            setUniqueId(generatedId);
          }, []);

  return (
    <section className="container mx-auto flex flex-col">
      <h1 className="text-center font-[500] text-[30px] p-[25px]">
        Поиск объектов и проверка недвижимости перед покупкой
      </h1>
      <div className="bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
        <div className="flex items-center gap-[20px] mb-[15px]">
          <button className="search-select-item search-select--active">
            Стандартный поиск
          </button>
          <span className="text-[#c1c1c1] text-[11px]">или</span>
          <button className="search-select-item search-select--expand">
            Поиск по адресу (расширенный)
          </button>
        </div>
        <div>
          <div className="flex">
            <Select
              id={uniqueId}
              options={allOptions}
              value={selectedOptions}
              isSearchable={true}
              noOptionsMessage={() => "Введите данные"}
              // onChange={(selected) => setSelectedOptions(selected)}
              placeholder=" 59 : 09 : 0550001 : 893  или Москва Лялин 16"
              styles={customStyles}
              formatOptionLabel={formatOptionLabel}
              onInputChange={(inputValue, actionMeta) => {
                setSelectedOptions(inputValue);
              }}
            />
            <button className="search_btn" onClick={handleSearch}>
              Найти объект &gt;
            </button>
          </div>
          <div className="flex gap-[10px] mt-[10px] mb-[50px] items-center text-[11px]">
            <span className="">Например:</span>
            <button className="border-b-[1px] border-[#4667a3] text-[#4667a3] font-[600]">
              59 : 09 : 0550001 : 893
            </button>
            <span className="font-[700]">или</span>
            <button className="border-b-[1px] border-[#4667a3] text-[#4667a3] font-[600]">
              {" "}
              Москва Лялин 16
            </button>
            <button className="border-b-[1px] border-[#4667a3] text-[#4667a3] font-[600]">
              Где найти кадастровый номер?{" "}
            </button>
            <button className="border-b-[1px] border-[#4667a3] text-[#4667a3] ">
              {" "}
              Поиск по условному номеру
            </button>
            <button className="border-b-[1px] border-[#4667a3] text-[#4667a3] ">
              {" "}
              Поиск на карте
            </button>
          </div>
          <div className="">
            <table className="w-full">
              <thead className="bg-[#598a60] text-[#fff] h-[40px]">
                <tr className="">
                  <th className="text-start p-[10px] font-[400]">
                    Кадастровый номер:
                  </th>
                  <th className="text-start p-[10px] font-[400]">
                    Адрес объекта:
                  </th>
                  <th className="text-start p-[10px] font-[400]">Тип:</th>
                  <th className="text-start p-[10px] font-[400]">Площадь:</th>
                  <th className="text-start p-[10px] font-[400]">
                    На учёте с:
                  </th>
                  <th className="text-start p-[10px] font-[400]">
                    Собственник:
                  </th>
                  <th className="text-start p-[10px] font-[400]"></th>
                </tr>
              </thead>
              <tbody className="">
                {searchResults.map((result, index) => (
                  <tr
                    key={index}
                    className="border-b-[1px] border-[#e4e4e4] hover:bg-[#f4fcf5] text-[13px]"
                  >
                    <td className="text-start px-[10px] py-[30px] flex items-center gap-[15px]">
                    <img className="h-[15px] w-[15px]" src="/img/table-checked.png" alt="table-checked" width={15} height={15} />
                      <Link
                        href={`/number/${result.number}`}
                        className="font-[600]"
                      >
                        {result.number}
                      </Link>
                    </td>
                    <td className="text-start p-[10px]">
                      <Link href={`/number/${result.number}`} className="">
                        {result.adress}
                      </Link>
                    </td>
                    <td className="text-start p-[10px]">
                      <Link href={`/number/${result.number}`} className="">
                        {result.type}
                      </Link>
                    </td>
                    <td className="text-start p-[10px]">
                      <Link href={`/number/${result.number}`} className="">
                        {result.square}
                      </Link>
                    </td>
                    <td className="text-start p-[10px]">
                      <Link href={`/number/${result.number}`} className="">
                        {result.data}
                      </Link>
                    </td>
                    <td className="text-start p-[10px]">
                      <Link
                        href={`/number/${result.number}`}
                        className="text-[#898888]"
                      >
                        {result.owner}
                      </Link>
                    </td>
                    <td>
                      <Link
                        href={`/number/${result.number}`}
                        className="text-start p-[10px]"
                      >
                        <button className="py-[10px] px-[20px] bg-[#598a60] text-[#fff] rounded-[4px] hover:bg-[#38593d]">
                          Выбрать &gt;
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-[15px] border-l-[2px] border-[#8fbd8a] bg-[#f7fffa] w-[80%] mt-[70px]">
             Для оформления заявки на получение онлайн отчета о проверке недвижимости, 
             укажите кадастровый номер или адрес объекта. Далее найдите объект и оформите
              услугу по проверке объекта недвижимости перед покупкой. После оплаты, на ваш 
              E-mail поступит полный отчёт о проверке недвижимости на юридическую чистоту в 
              течение нескольких часов (сроки зависят от загруженности базы). 
        </div>
        <div className="mt-[50px] flex items-center w-[80%] gap-[15px]">
          <img className="h-[22px] w-[26px]" src="/img/znak-bezopasnosti.png" alt="znak-bezopasnosti" width={15} height={15} />
          <p className="p-[10px] text-[#8a8a8a] text-[13px]"> 
            Оформление заявки на получение полноценной информации об объектах недвижимости и её 
            последующей проверки по базам на наличие ареста, долгов и обременений доступно по всем объектам,
             поставленных на учёт в ЕГРН. Данный сервис осуществляет только услугу по юридической проверки 
             недвижимости перед покупкой. 
          </p>
        </div>
      </div>
    </section>
  );
}
