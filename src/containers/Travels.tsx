import {Grid2 as Grid} from "@mui/material";
import {FC} from "react";
import GuideContainer, {
  GuideContainerProps,
} from "../components/guide/GuideContainer";
import CategoryContainer, {
  CategoryContainerProps,
} from "../components/travels/CategoryContainer";

export interface TravelsProps {
  categoryContainer: CategoryContainerProps;
  guideContainer: GuideContainerProps;
}

// Create the functional component with the props type
const Travels: FC<TravelsProps> = ({categoryContainer, guideContainer}) => {
  return (
    <>
      <div style={{backgroundColor: "#E6F2F2"}} className="pb-4">
        <Grid container spacing={1}>
          <Grid size={{xs: 12, sm: 6}}>
            <CategoryContainer categories={categoryContainer.categories} />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <GuideContainer guides={guideContainer.guides} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Travels;
