'use client'

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Search() {

  const [inputValue, setInputValue] = useState('');
  const [visibled, setVisibled] = useState(true);
  const [visibledDataRosreestr, setVisibledDataRosreestr] = useState(false);
  const [dataDadata, setDataDadata] = useState('');
  const [dataRosreestr, setDataRosreestr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);

    const regexp = /\d+\s*:\s*\d+\s*:\s*\d+\s*:\s*\d+/g
    const checker = regexp.test(inputValue)

    console.log('checker', checker)
  
    if (checker) {
      localStorage.removeItem('full_name')
      window.location.href = (`/number/${inputValue}`)
    } else {
      axios.get(`http://localhost:3000/api/rosreesrtItem?query=${inputValue}`)
      .then((response) => {
        console.log('response.........', response.data)
        setDataRosreestr(response.data);       
        setInputValue('')
      })
      .catch((error) => {
        console.error('Произошла:', error);
        setIsLoading(false); // Завершение загрузки
      });
    }       
      setInputValue('')
      // if (dataRosreestr.length > 0) {
      //   setIsLoading(false); // Завершение загрузки
      //   setVisibledDataRosreestr(true)
      // }
      setTimeout(() => {
        setIsLoading(false); // Завершение загрузки
        setVisibledDataRosreestr(true)
      }, 4000)

  };

  const selectionHandler = (full_name) => {
    localStorage.setItem('full_name', full_name)
    setVisibledDataRosreestr(false)
    setIsLoading(true); 
    // if (dataRosreestr.length > 0) {
    //   setIsLoading(false); 
    // }
    setTimeout(() => {
      setIsLoading(false); 
    }, 5000)
  }

  // console.log('dataDadata', dataDadata)
  // console.log('inputValue', inputValue)
  // console.log('visibled', visibled)

  
const askDadata = async (subject = '') => {
  setVisibled(true)
  setVisibledDataRosreestr(false)
  setInputValue(subject)
  const getAskDadata = await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'token 8784dab37baa389f678420145ffe7e576daa7f3f', //evgenzolotoff
      // 'Host': 'suggestions.dadata.ru',
    },
    url: encodeURI("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"),
    data: {query: subject, 'count':10}
  })

  setDataDadata(getAskDadata.data.suggestions)
}

    
  const onClickItemInputValue = (item) => {
    setVisibled(false)
    setInputValue(item)
    setDataDadata('')
  }

  const typeMapping = {
    OKS: 'Здание',
    FLAT: 'Квартира',
    PARCEL: 'Земельный участок',
};

const resultsArrayDataRosreestr = dataRosreestr.map((elem) => {
    const type = typeMapping[elem.type] 
    const item = {
        cadnum: elem.cadnum,
        full_name: elem.full_name,
        type,
        actual: elem.actual
    };

    return item;
}).filter(it => it.actual === true);

  console.log('resultsArrayDataRosreestr', resultsArrayDataRosreestr)

  const setCadastrNumber = () => {
    setInputValue('61:02:0070202:1824')
  }

  const setDadataAdress = () => {
    setInputValue('Москва Лялин 16')
  }

    return (
      <div className="">
      <div className="flex items-center gap-[20px] mb-[15px]">
        <span className="text-[11px]"><strong>Для поиска</strong> введите адрес или кадастровый номер объекта:</span>
        {/* <button className="search-select-item">
          Стандартный поиск
        </button> */}
        {/* <span className="text-[#c1c1c1] text-[11px]">или</span>
        <button className="search-select-item search-select--expand">
          Поиск по адресу (расширенный)
        </button> */}
      </div>
      <div className="relative flex">
          <input 
              type="text" 
              value={inputValue}
              className=" w-[100%] py-[10px] px-[20px]  border-[1px] border-[#6ea3df] outline-none rounded-tl-[4px] rounded-bl-[4px] " 
              placeholder="59 : 09 : 0550001 : 893 или Москва Лялин 16" 
              onChange={(e) => askDadata(e.target.value)}
          />
          <button className="search_btn" onClick={handleSearch}>
          {isLoading ? (
            <span className="loader"></span>
            ) : (
                "Найти объект >"
            )}
          </button>  
          <div className="absolute top-[50px] left-0 w-[100%] max-h-[310px] overflow-y-auto flex flex-col shadow-lg shadow-[#f7fffa]-500">
          {visibled && dataDadata && dataDadata.map((el, index) => (
            <button
              className={`py-[10px] px-[20px] text-start hover:bg-[#4682b4] hover:text-[#ffffff] ${
                index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
              }`}
              key={`${el.value}${index}`}
              onClick={() => onClickItemInputValue(el.value)}
            >
              {el.value}
            </button>
          )
          )}
        </div>       
        </div>

        <div className="flex gap-[10px] mt-[10px] mb-[50px] items-center text-[11px]">
            <span className="">Например:</span>
            <button onClick={setCadastrNumber} className="border-b-[1px] border-[#4682B4] text-[#4682B4] font-[600]">
              61:02:0070202:1824
            </button>
            <span className="font-[700]">или</span>
            <button onClick={setDadataAdress} className="border-b-[1px] border-[#4682B4] text-[#4682B4] font-[600]">
              {" "}
              Москва Лялин 16
            </button>
          </div>
          {visibledDataRosreestr && <div className="max-h-[525px] overflow-x-auto rounded-[4px] pb-[30px] shadow-lg shadow-[#f7fffa]-500">
            <table className="w-full">
              <thead className="fixed-header bg-[#598a60] text-[#fff] h-[40px]">
                <tr className="w-full">
                  <th className="text-start p-[10px] pl-[30px] font-[400]">
                  Тип:
                  </th>
                  <th className="text-start p-[10px] font-[400]">
                    Адрес объекта:
                  </th>
                  <th className="text-start p-[10px] font-[400]">Кадастровый номер:</th>
                  <th className="text-start p-[10px] font-[400]"></th>
                </tr>
              </thead>
              <tbody className="">
                {resultsArrayDataRosreestr && resultsArrayDataRosreestr.length > 0 ? (
                  resultsArrayDataRosreestr.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b-[1px] border-[#e4e4e4] hover:bg-[#f4fcf5] text-[13px]"
                    >
                      <td className="text-start px-[10px] pl-[30px]  py-[30px] flex items-center gap-[15px]">
                        <img className="h-[15px] w-[15px]" src="/img/table-checked.png" alt="table-checked" width={15} height={15} />
                        <span className="font-[600]">
                          {item.type}
                        </span>
                      </td>
                      <td className="text-start p-[10px]">
                        <span>
                          {item.full_name}
                        </span>
                      </td>
                      <td className="text-start p-[10px]">
                        <span>
                          {item.cadnum}
                        </span>
                      </td>
                      <td>
                        <Link
                          href={`/number/${item.cadnum}`}
                          className="text-start p-[10px]"
                          onClick={() => selectionHandler(item.full_name)}
                        >
                          <button  className="py-[10px] px-[20px] bg-[#598a60] text-[#fff] rounded-[4px] hover:bg-[#38593d]">
                            Выбрать &gt;
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="">
                    <td></td>
                    <td className="text-right py-[10px] text-[#c31111] text-[15px] font-[700]">Нет данных на базе</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>}
      </div>
    )
  }