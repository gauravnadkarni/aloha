import Grid from "@mui/material/Grid2";
import {FC} from "react";
import HighlightCard, {HighlightCardProps} from "./HighlightCard";

export interface HighlightContainerProps {
  cards: Array<HighlightCardProps>;
}

const HighlightContainer: FC<HighlightContainerProps> = ({cards}) => {
  return (
    <>
      <div className="mx-2 text-left my-10">
        <div className="font-bold text-base mb-7">Highlights</div>
        <div>
          <Grid container spacing={2}>
            {cards.map((card, idx) => (
              <Grid
                key={`${card.title}-${idx}`}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}>
                <HighlightCard key={`${card.title}-${idx}`} {...card} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default HighlightContainer;
