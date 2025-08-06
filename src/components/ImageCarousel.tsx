import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
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
import image6 from "@/assets/image6.jpeg";
import image7 from "@/assets/image7.jpeg";

const slides = [
  { id: "1", src: image1, alt: "נכס השקעה 1" },
  { id: "2", src: image2, alt: "נכס השקעה 2" },
  { id: "3", src: image3, alt: "נכס השקעה 3" },
  { id: "4", src: image4, alt: "נכס השקעה 4" },
  { id: "5", src: image5, alt: "נכס השקעה 5" },
  { id: "6", src: image6, alt: "נכס השקעה 6" },
  { id: "7", src: image7, alt: "נכס השקעה 7" },
];

export default function ImageCarousel() {
  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 relative"> {/* הוספתי relative כאן */}

        <h2 className="text-4xl font-bold text-center mb-8">
          פרויקטים והשקעות
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}  {/* מספר התמונות ל-3 כפי שביקשת */}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          a11y={{
            prevSlideMessage: "הצג פרויקט קודם",
            nextSlideMessage: "הצג פרויקט הבא",
          }}
          className="relative"
          style={{ overflow: "visible" }} // חשוב שהחיצים לא ייחתכו מחוץ לקונטיינר
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* חיצים מעל התמונה בצידי הסליידר */}
          <style jsx>{`
            .swiper-button-prev,
            .swiper-button-next {
              position: absolute;
              top: 50%;
              width: 3rem;
              height: 3rem;
              margin-top: -1.5rem; /* למרכז לגובה */
              background: rgba(255, 255, 255, 0.7);
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
              color: #111827;
              z-index: 10;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              /* מיקום החיצים לצדדים יחסית ל-container */
            }
            .swiper-button-prev {
              left: 10px;
            }
            .swiper-button-next {
              right: 10px;
            }
          `}</style>
        </Swiper>
      </div>
    </section>
  );
}

