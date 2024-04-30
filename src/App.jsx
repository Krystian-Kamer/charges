import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { listOfCharges, months } from './data';
import { IoAddOutline } from 'react-icons/io5';
import { FaMoneyBillAlt } from 'react-icons/fa';

const App = () => {
  const [actualWidth, setActualWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(2);

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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [actualWidth]);

  return (
    <section className='mb-24 w-screen max-w-5xl px-5 md:px-16'>
      <div className='flex-center font-bold uppercase'>
        <h1 className='mb-4 text-lg'>Rachunki</h1>
      </div>
      <div className='flex border-2 rounded-xl font-mono uppercase font-bold border-black overflow-hidden shadow-2xl'>
        <div className='w-full sm:w-1/3'>
          <h2 className='p-el border-b border-black'>Opłaty</h2>
          {listOfCharges.map((charge, index) => {
            return (
              <div
                className='py-1 p-el border text-el border-black'
                key={index}
              >
                {charge.name}
              </div>
            );
          })}
          <h2 className='p-el py-1 border-r border-t border-black text-el'>
            Suma
          </h2>
        </div>
        <Swiper
          className='w-full sm:w-2/3 swiper_container'
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={slidesPerView}
        >
          {months.map((month, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex-center flex-col items-center  '>
                  <div className='flex-center w-full  border-b border-black'>
                    <p className=''>{month}</p>
                  </div>
                  {listOfCharges.map((charge, index) => {
                    return (
                      <div
                        className='relative flex-center items-center py-1 w-full bg-transparent  cursor-pointer border border-black text-el overflow-hidden'
                        key={index}
                      >
                        <p>ok</p>
                        <div className='absolute -right-8 hover:right-0'>
                          <FaMoneyBillAlt />
                        </div>
                      </div>
                    );
                  })}
                  <div className=' w-full flex-center py-1 border-x border-t border-black '>
                    <p className='text-el'>12 zł</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='flex-center mt-3'>
        <button className='text-black text-3xl bg-transparent rounded-full border-2 border-black'>
          <IoAddOutline />
        </button>
      </div>
    </section>
  );
};
export default App;
