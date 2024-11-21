import Grid from "@mui/material/Grid2";
import {FC} from "react";
import FooterBox, {FooterProps} from "../components/footer/FooterBox";

// Create the functional component with the props type
const Footer: FC<FooterProps> = props => {
  return (
    <Grid container>
      <Grid size={{sm: 12}}>
        <FooterBox {...props} />
      </Grid>
    </Grid>
  );
};

export default Footer;
