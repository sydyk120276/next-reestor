import React, { useState } from 'react';
import Modal from 'react-modal';

function ImageViewerAlt({ imagePaths, closeModalka  }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const openModal = () => {
    setModalIsOpen(true); // Открываем модальное окно
  };

  const closeModal = () => {
    setModalIsOpen(false);
    closeModalka()
  };

  const nextPage = () => {
    if (currentPage < imagePaths.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedImage = imagePaths[currentPage];

  return (
    <div className=" ">
      <button onClick={openModal} className="examples__zoom-checkbox">
        <img
          className="w-[100%] h-[100%] object-contain"
          src={displayedImage}
          alt="example_full_1_n"
          width={10}
          height={10}
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Пример модального окна"
        className="z-40 flex justify-center bg-black bg-opacity-40 h-full"
        shouldCloseOnOverlayClick={true} // Закрытие по клику вне окна
        shouldCloseOnEsc={true} // Закрытие по нажатию клавиши "Esc"
      >
        <div     onClick={(e) => {
            // Предотвращаем всплытие события, чтобы избежать закрытия окна при клике внутри блока
            e.stopPropagation();
            }} 
            className="w-[720px] h-[750px] flex flex-col z-[100] p-[20px] mt-[30px] mb-[30px] bg-white border-[8px] border-[#f5f9fe]">
          <button className="text-right font-[600] p-[5px] bg-[#f0f3f6]" onClick={closeModal}>
            Закрыть
          </button>

          <div className="w-[100%] h-[600px] flex justify-center items-center">
            <img
              src={displayedImage}
              alt={`Image ${currentPage + 1}`}
              className="w-[100%] h-[100%] object-contain"
              width={10}
              height={10}
            />
          </div>

          <div className="flex justify-center gap-[50px] font-[600] p-[5px] bg-[#f0f3f6]">
            <button onClick={prevPage} disabled={currentPage === 0}>
              &lt; Предыдущее
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === imagePaths.length - 1}
            >
              Следующее &gt;
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ImageViewerAlt;