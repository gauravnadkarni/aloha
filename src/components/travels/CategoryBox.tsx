import {FC} from "react";
import classes from "./CategoryBox.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classnames from "classnames";

export interface CategoryBoxProps {
  title: string;
}

const CategoryBox: FC<CategoryBoxProps> = ({title}) => {
  return (
    <>
      <div
        className={classnames(
          classes.categoryBox,
          "flex justify-between p-6 h-16 rounded-lg items-center",
        )}>
        <div className={classes.title}>{title}</div>
        <div className={classes.control}>
          <button>
            <ArrowForwardIcon className={classes.arrow} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
