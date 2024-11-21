import {FC} from "react";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import HighlightCard, {HighlightCardProps} from "./HighlightCard";

export interface SliderContainerProps {
  cards: Array<HighlightCardProps>;
}

const SliderContainer: FC<SliderContainerProps> = ({cards}) => {
  return (
    <div className="mx-2 text-left my-10">
      <div className="font-bold text-base mb-7">Highlights</div>
      <div>
        <Swiper
          modules={[]}
          navigation={false}
          pagination={{clickable: true}}
          spaceBetween={5}
          slidesPerView={"auto"}>
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="m-3">
                <HighlightCard key={`${card.title}-${idx}`} {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderContainer;
