import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../../node_modules/swiper/swiper-bundle.min.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9 } from '../../utils/Landing/Landing';

SwiperCore.use([Autoplay]);

const photos = [
  { src: `${gallery1}`, alt: 'Photo 1' },
  { src: `${gallery2}`, alt: 'Photo 2' },
  { src: `${gallery3}`, alt: 'Photo 3' },
  { src: `${gallery4}`, alt: 'Photo 4' },
  { src: `${gallery5}`, alt: 'Photo 5' },
  { src: `${gallery6}`, alt: 'Photo 6' },
  { src: `${gallery7}`, alt: 'Photo 7' },
  { src: `${gallery8}`, alt: 'Photo 8' },
  { src: `${gallery9}`, alt: 'Photo 9' },
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {/* @ts-ignore */}
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img src={photo.src} alt={photo.alt} className="w-full h-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoGallery;
