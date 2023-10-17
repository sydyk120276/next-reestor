"use client";
import React from "react";

import Search from './components/search'

export default function Main() {

  return (
    <section className="container mx-auto xl:max-w-screen-xl flex flex-col">
      <h1 className="text-center font-[500] text-[30px] p-[25px]">
        Поиск объектов и проверка недвижимости перед покупкой
      </h1>
      <div className="bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
         <Search />
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
