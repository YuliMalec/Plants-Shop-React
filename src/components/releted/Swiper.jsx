import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Product from '../shop/Product';
import styles from './releted.module.css';
import Context from '../../hooks/Context';
import { useContext } from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default ({releted}) => {
  const value = useContext(Context)
  let slidePreview = value.width < 431? 3 : 5
  return (
    
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={ slidePreview}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {releted.map((elem=>{
        return   <SwiperSlide key = {elem.id}><Product elem={elem} /></SwiperSlide>
    }))}
  
   
    ...
  </Swiper>
  );
};