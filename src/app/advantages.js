export default function Advantages() {
    return (
      <section className="flex gap-[20px] container mx-auto xl:max-w-screen-xl bg-[#fff] p-[35px] hover:shadow-lg hover:shadow-[#f7fffa]-500 mb-[30px]">
         <div className="flex gap-[20px]" >
           <img className="h-[24px] w-[24px]" src="/img/advantages1.png" alt="advantages1" width={15} height={15} />
           <div className="flex flex-col gap-[10px]">
              <span className="font-[500] text-[15px]">Время исполнения - 6-24 час.</span>
              <p className="text-[#6e6e6e] text-[13px] leading-[14px]">Срочные отчеты о проверке выполняются в течение 6-12 часов. Максимальное время формирования - 3 раб. дня.</p>
           </div>
         </div>
         <div className="flex gap-[20px]">
           <img className="h-[24px] w-[24px]" src="/img/advantages2.png" alt="advantages1" width={15} height={15} />
           <div className="flex flex-col gap-[10px]">
              <span className="font-[500] text-[15px]">Актуальность и достоверность</span>
              <p className="text-[#6e6e6e] text-[13px] leading-[14px]">Отчеты о проверке выполняются на основе актуальных данных о недвижимости.</p>
           </div>
         </div>
         <div className="flex gap-[20px]">
           <img className="h-[24px] w-[24px]" src="/img/advantages3.png" alt="advantages1" width={15} height={15} />
           <div className="flex flex-col gap-[10px]">
              <span className="font-[500] text-[15px]">Гарантия исполнения заказа</span>
              <p className="text-[#6e6e6e] text-[13px] leading-[14px]">В случае, если объект не будет найден или возникнут тех. сбои, гарантируется полный возврат денежных средств по требованию граждан РФ.</p>
           </div>
         </div>
      </section>
    )
  }