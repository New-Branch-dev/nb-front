"use client";

import { Slider } from "@widgets/slider";

import { MAIN_SLIDER_ITEMS } from "@views/main/model/consts";
import { header, sliderWrapper } from "@views/main/ui/page/Page.css";
import { SliederItems } from "@views/main/ui/slider-items/SliederItems";

type MainPageProps = {
  nickname: string;
};

export const MainPage = ({ nickname }: MainPageProps) => {
  return (
    <main>
      <header>
        <h1 className={header}>
          안녕하세요,
          <br />
          {nickname}님
        </h1>
      </header>

      <article className={sliderWrapper}>
        <Slider items={MAIN_SLIDER_ITEMS} ItemComponent={SliederItems} />
      </article>
    </main>
  );
};
