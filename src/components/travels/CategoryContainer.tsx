import Grid from "@mui/material/Grid2";
import classnames from "classnames";
import {FC} from "react";
import CategoryBox, {CategoryBoxProps} from "./CategoryBox";

export interface CategoryContainerProps {
  categories: Array<CategoryBoxProps>;
}

const CategoryContainer: FC<CategoryContainerProps> = ({categories}) => {
  return (
    <>
      <div className={classnames("p-4")}>
        <div className="font-bold text-base pb-4 text-left">Categories</div>
        <div>
          <Grid container spacing={1}>
            {categories.map((category, idx) => (
              <Grid
                key={`${category.title}-${idx}`}
                size={{
                  xs: 12,
                }}>
                <CategoryBox
                  key={`${category.title}-${idx}`}
                  title={category.title}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
