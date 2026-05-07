"use client";

import Image from "next/image";
import { type ComponentType, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  sliderItem,
  sliderNavButton,
  sliderNavIcon,
  sliderNextButton,
  sliderPrevButton,
  sliderSlide,
  sliderViewport,
  sliderWrapper,
} from "./Slider.css";

import "swiper/css";

type SliderItemBase = {
  id: string;
};

type SliderProps<T extends SliderItemBase> = {
  items: T[];
  ItemComponent: ComponentType<{ item: T }>;
};

export const Slider = <T extends SliderItemBase>({
  items,
  ItemComponent,
}: SliderProps<T>) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncNavState = (instance: SwiperType) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  return (
    <section className={sliderWrapper} aria-label="Content slider">
      <button
        type="button"
        className={`${sliderNavButton} ${sliderPrevButton}`}
        onClick={() => swiper?.slidePrev()}
        aria-label="이전 슬라이드"
        disabled={isBeginning}
      >
        <Image
          src="/slider-arrow-left.svg"
          alt=""
          width={55}
          height={32}
          className={sliderNavIcon}
          aria-hidden
        />
      </button>

      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={12}
        onSwiper={(instance) => {
          setSwiper(instance);
          syncNavState(instance);
        }}
        onSlideChange={syncNavState}
        breakpoints={{
          0: { slidesPerView: 1.15, slidesPerGroup: 1 },
          640: { slidesPerView: 2.2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className={sliderViewport}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={sliderSlide}>
            <article className={sliderItem}>
              <ItemComponent item={item} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className={`${sliderNavButton} ${sliderNextButton}`}
        onClick={() => swiper?.slideNext()}
        aria-label="다음 슬라이드"
        disabled={isEnd}
      >
        <Image
          src="/slider-arrow-right.svg"
          alt=""
          width={55}
          height={32}
          className={sliderNavIcon}
          aria-hidden
        />
      </button>
    </section>
  );
};
