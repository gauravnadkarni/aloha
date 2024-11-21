import {FC} from "react";
import Avatar from "@mui/material/Avatar";
import classnames from "classnames";
import classes from "./GuideBox.module.css";

export interface GuideBoxProps {
  title: {
    main: string;
    sub: string;
  };
  imagePath: string;
  buttonText: string;
}

const GuideBox: FC<GuideBoxProps> = ({title, imagePath, buttonText}) => {
  return (
    <>
      <div className={classnames(classes.guideBox, "p-6")}>
        <div
          className={classnames(
            classes.profileBox,
            "flex flex-row justify-between mb-4",
          )}>
          <div className={classnames(classes.title)}>
            <div className={classnames(classes.mainTitle)}>{title.main}</div>
            <div className={classnames(classes.subTitle)}>{title.sub}</div>
          </div>
          <div className={classnames(classes.image)}>
            <Avatar
              alt={title.main}
              src={imagePath}
              sx={{
                width: "4.5rem",
                height: "4.5rem",
              }}
            />
          </div>
        </div>
        <div className={classnames(classes.contact)}>
          <button className={classes.contactButton}>
            {buttonText || "Contact"}
          </button>
        </div>
      </div>
    </>
  );
};

export default GuideBox;
