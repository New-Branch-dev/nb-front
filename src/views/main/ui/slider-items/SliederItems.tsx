import Image from "next/image";
import Link from "next/link";

import type { MainSliderItem } from "@views/main/model/consts";

import {
  actionRow,
  contentColumn,
  descriptionText,
  firstVisualWrap,
  iconImage,
  iconImageWrap,
  infoColumn,
  startLink,
  titleText,
  visualImage,
  visualWrap,
} from "./SliederItems.css";

type SliederItemsProps = {
  item: MainSliderItem;
};

export const SliederItems = ({ item }: SliederItemsProps) => {
  const visualWrapClassName = [
    visualWrap,
    item.id === "1" ? firstVisualWrap : "",
  ]
    .join(" ")
    .trim();

  return (
    <div>
      <div className={contentColumn}>
        <div className={infoColumn}>
          <div className={iconImageWrap}>
            <Image
              src={item.icon}
              alt={item.iconAlt}
              fill
              sizes="2rem"
              className={iconImage}
            />
          </div>

          <h3 className={titleText}>{item.title}</h3>
          <p className={descriptionText}>{item.description}</p>
        </div>

        <div className={actionRow}>
          <Link href={item.href} className={startLink}>
            시작하기
            <Image
              src="/arrow-right-black.svg"
              alt="화살표 이미지"
              width={16}
              height={16}
              aria-hidden
            />
          </Link>
        </div>
      </div>

      <div className={visualWrapClassName}>
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="8.5rem"
          className={visualImage}
        />
      </div>
    </div>
  );
};
