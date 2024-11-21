import {FC} from "react";
import Grid from "@mui/material/Grid2";
import classnames from "classnames";
import GuideBox, {GuideBoxProps} from "./GuideBox";

export interface GuideContainerProps {
  guides: Array<GuideBoxProps>;
}

const GuideContainer: FC<GuideContainerProps> = ({guides}) => {
  return (
    <>
      <div className={classnames("p-4")}>
        <div className="font-bold text-base pb-4 text-left">Travel Guide</div>
        <div>
          <Grid container spacing={1}>
            {guides.map((guide, idx) => (
              <Grid
                key={`${guide.title}-${idx}`}
                size={{
                  xs: 12,
                }}>
                <GuideBox key={`${guide.title}-${idx}`} {...guide} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default GuideContainer;
