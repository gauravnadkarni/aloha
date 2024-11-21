import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {FC} from "react";
import classes from "./HighlightCard.module.css";

export interface HighlightCardProps {
  image: {
    path: string;
    alt: string;
  };
  title: string;
  text: string;
}

const HighlightCard: FC<HighlightCardProps> = ({image, title, text}) => {
  return (
    <>
      <div className={classes.container}>
        <Card sx={{borderRadius: "8px"}}>
          <CardMedia sx={{height: 140}} image={image.path} title={image.alt} />
          <Box sx={{padding: "1.7rem"}}>
            <CardContent
              classes={{
                root: "min-h-20",
              }}
              sx={{
                padding: "0rem",
              }}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                }}>
                {text}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: "flex-end",
                padding: "0rem",
              }}>
              <button className={classes.buttonRoot}>
                <ArrowForwardIcon className={classes.arrow} />
              </button>
            </CardActions>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default HighlightCard;
