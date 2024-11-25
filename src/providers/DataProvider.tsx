import React from "react";
import {DataContext} from "../hooks/DataContext";
import {TitleBoxProps} from "../components/top-bar/TitleBox";
import {HighlightContainerProps} from "../components/highlights/HighlightContainer";
import {CategoryBoxProps} from "../components/travels/CategoryBox";
import {GuideBoxProps} from "../components/guide/GuideBox";
import {FooterProps} from "../components/footer/FooterBox";

interface DataProviderProps {
  titleBoxProps: TitleBoxProps;
  highlightBoxProps: Array<HighlightContainerProps["cards"][number]>;
  categoriesBoxProps: Array<CategoryBoxProps>;
  guidesBoxProps: Array<GuideBoxProps>;
  footerProps: FooterProps;
  children: React.ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({
  titleBoxProps,
  highlightBoxProps,
  categoriesBoxProps,
  guidesBoxProps,
  footerProps,
  children,
}) => {
  return (
    <DataContext.Provider
      value={{
        titleBoxProps,
        highlightBoxProps,
        categoriesBoxProps,
        guidesBoxProps,
        footerProps,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
