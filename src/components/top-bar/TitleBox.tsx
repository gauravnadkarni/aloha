import {Box} from "@mui/material";
import classnames from "classnames";
import {FC} from "react";
import {
  AppBarForDesktop,
  AppBarForMobile,
  AppBarPropsWithClickEvent,
} from "./AppBar";
import classes from "./TitleBox.module.css";

export interface TitleBoxProps {
  image: {
    small: string;
    large: string;
  };
  text: {
    firstLine: string;
    secondLine: string;
  };
  appBarConfig: AppBarPropsWithClickEvent;
}

// Create the functional component with the props type
const TitleBoxForMobile: FC<TitleBoxProps> = ({image, text, appBarConfig}) => {
  return (
    <>
      <AppBarForMobile {...appBarConfig} />
      <div
        className="relative w-full h-64 bg-cover bg-center flex justify-center items-center w-full"
        style={{
          backgroundImage: `url('${image.small}')`,
          height: "480px",
        }}>
        <div className={classes.bar}></div>
        <div
          style={{
            fontWeight: "700",
            fontSize: "64px",
            lineHeight: "60px",
          }}>
          <div>
            <span
              className={classnames(
                classes.textGradient5,
                "bg-clip-text text-transparent",
              )}>
              {text.firstLine}
            </span>
          </div>
          <div>
            <span
              className={classnames(
                classes.textGradient9,
                "bg-clip-text text-transparent",
              )}>
              {text.secondLine}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const TitleBoxForDesktop: FC<TitleBoxProps> = ({image, text, appBarConfig}) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url('${image.large}')`,
          height: "560px",
        }}>
        <div className={classes.bar}>
          <AppBarForDesktop {...appBarConfig} />
        </div>
        <div
          style={{
            fontWeight: "700",
            fontSize: "140px",
            lineHeight: "132px",
            transform: "translate(-50%, -50%)",
          }}
          className={classnames("absolute top-1/2 left-1/2")}>
          <div>
            <div>
              <span
                className={classnames(
                  classes.textGradient5,
                  "bg-clip-text text-transparent",
                )}>
                {text.firstLine}
              </span>
            </div>
            <div>
              <span
                className={classnames(
                  classes.textGradient9,
                  "bg-clip-text text-transparent",
                )}>
                {text.secondLine}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TitleBox: FC<TitleBoxProps> = props => {
  return (
    <>
      <Box sx={{display: {xs: "block", md: "none"}}}>
        <TitleBoxForMobile {...props} />
      </Box>
      <Box sx={{display: {xs: "none", md: "block"}}}>
        <TitleBoxForDesktop {...props} />
      </Box>
    </>
  );
};

export default TitleBox;
