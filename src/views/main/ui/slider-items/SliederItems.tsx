import Image from "next/image";
import Link from "next/link";

import { Icon } from "@shared/ui";

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
} from "@views/main/ui/slider-items/SliederItems.css";

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
            <Icon
              src={item.icon}
              alt={item.iconAlt}
              size="lg"
              className={iconImage}
            />
          </div>

          <h3 className={titleText}>{item.title}</h3>
          <p className={descriptionText}>{item.description}</p>
        </div>

        <div className={actionRow}>
          <Link href={item.href} className={startLink}>
            시작하기
            <Icon
              src="/arrow-right-black.svg"
              alt="화살표 이미지"
              size="sm"
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
