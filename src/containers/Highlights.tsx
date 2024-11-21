import {Box} from "@mui/material";
import {FC} from "react";
import HighlightContainer, {
  HighlightContainerProps,
} from "../components/highlights/HighlightContainer";
import SliderContainer from "../components/highlights/SliderContainer";

export interface HighlightProps {
  highlights: Array<HighlightContainerProps["cards"][number]>;
}

// Create the functional component with the props type
const Highlights: FC<HighlightProps> = ({highlights}) => {
  return (
    <>
      <Box sx={{display: {xs: "none", sm: "block"}}}>
        <HighlightContainer cards={highlights} />
      </Box>
      <Box sx={{display: {xs: "block", sm: "none"}}}>
        <SliderContainer cards={highlights} />
      </Box>
    </>
  );
};

export default Highlights;
