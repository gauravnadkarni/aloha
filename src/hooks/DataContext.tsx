import { createContext, useContext } from 'react';
import { TitleBoxProps } from '../components/top-bar/TitleBox';
import { HighlightContainerProps } from '../components/highlights/HighlightContainer';
import { CategoryBoxProps } from '../components/travels/CategoryBox';
import { GuideBoxProps } from '../components/guide/GuideBox';
import { FooterProps } from '../components/footer/FooterBox';

export interface DataContextType {
  titleBoxProps: TitleBoxProps;
  highlightBoxProps: Array<HighlightContainerProps["cards"][number]>;
  categoriesBoxProps: Array<CategoryBoxProps>;
  guidesBoxProps: Array<GuideBoxProps>;
  footerProps: FooterProps;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

const useHook = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("dataContext must be used within a DataProvider");
  }
  return context;
}

export default useHook;