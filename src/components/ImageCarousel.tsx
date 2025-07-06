// components/ImageCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";

const slides = [
  { id: "1", src: image1, alt: "נכס השקעה 1" },
  { id: "2", src: image2, alt: "נכס השקעה 2" },
  { id: "3", src: image3, alt: "נכס השקעה 3" },
  { id: "4", src: image4, alt: "נכס השקעה 4" },
  { id: "5", src: image5, alt: "נכס השקעה 5" },
];

export default function ImageCarousel() {
  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          פרויקטים והשקעות
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          a11y={{
            prevSlideMessage: "הצג פרויקט קודם",
            nextSlideMessage: "הצג פרויקט הבא",
          }}
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
