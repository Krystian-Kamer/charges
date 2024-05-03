import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { listOfCharges, months } from './data';
import Charges from './components/Charges';
import HandleCharges from './components/HandleCharges';
import CheckedList from './components/CheckedList';
import Modal from './components/Modal';

const App = () => {
  const [actualWidth, setActualWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [isModalActive, setIsModalActive] = useState(false);
  const [list, setList] = useState(listOfCharges);

  useEffect(() => {
    const changeSlidesPerView = () => {
      switch (true) {
        case actualWidth < 500:
          setSlidesPerView(1);
          break;
        case actualWidth >= 500 && actualWidth < 750:
          setSlidesPerView(2);
          break;
        case actualWidth >= 750 && actualWidth < 900:
          setSlidesPerView(3);
          break;
        case actualWidth >= 900 && actualWidth < 1200:
          setSlidesPerView(4);
          break;
        case actualWidth >= 1200 && actualWidth < 1800:
          setSlidesPerView(5);
          break;
        case actualWidth >= 1800:
          setSlidesPerView(6);
          break;
        default:
          break;
      }
    };
    changeSlidesPerView();
    const handleResize = () => {
      setActualWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, [actualWidth]);

  return (
    <section className='relative mb-24 w-screen max-w-5xl px-5 md:px-16 '>
      <div className='flex-center font-bold uppercase'>
        <h1 className='mb-4 text-lg'>Rachunki</h1>
      </div>
      <div className='flex border-2 rounded-xl font-mono uppercase font-bold border-black overflow-hidden shadow-[5px_10px_15px_10px_rgba(0,0,0,0.5)]'>
        <div className='w-full sm:w-1/3'>
          <h2 className='p-el py-2 border-b border-black'>Opłaty</h2>
          <Charges list={list} />
        </div>
        <Swiper
          className='w-full sm:w-2/3 swiper_container'
          grabCursor={true}
          spaceBetween={1}
          slidesPerView={slidesPerView}
        >
          {months.map((month, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex-center flex-col items-center  '>
                  <div className='flex-center w-full  border-b border-black'>
                    <p className='py-2'>{month}</p>
                  </div>
                  <CheckedList list={list} month={index} setList={setList} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <HandleCharges
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
      />
      {isModalActive && (
        <Modal
          list={list}
          setList={setList}
          setIsModalActive={setIsModalActive}
        />
      )}
    </section>
  );
};
export default App;
