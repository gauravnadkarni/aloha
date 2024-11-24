import {Container} from "@mui/material";
import {FC} from "react";
import "./App.css";
import {FooterProps} from "./components/footer/FooterBox";
import TitleBox from "./components/top-bar/TitleBox";
import withColoredBlock from "./components/withColoredBlock";
import Footer from "./containers/Footer";
import Highlights, {HighlightProps} from "./containers/Highlights";
import Travels, {TravelsProps} from "./containers/Travels";
import useDataContext from "./hooks/DataContext";

const TravelsBlock: FC<TravelsProps> = props => {
  return (
    <Container>
      <Travels {...props} />
    </Container>
  );
};

const FooterBlock: FC<FooterProps> = props => {
  return (
    <Container>
      <Footer {...props} />
    </Container>
  );
};

const HighlightBlock: FC<HighlightProps> = props => {
  return (
    <Container>
      <Highlights {...props} />
    </Container>
  );
};

function App() {
  const {
    categoriesBoxProps,
    footerProps,
    guidesBoxProps,
    highlightBoxProps,
    titleBoxProps,
  } = useDataContext();
  const TravelsBlockWithColor = withColoredBlock(TravelsBlock);
  const FooterBlockWithColor = withColoredBlock(FooterBlock);

  return (
    <div className="App">
      <TitleBox
        image={titleBoxProps.image}
        text={titleBoxProps.text}
        appBarConfig={titleBoxProps.appBarConfig}
      />
      <HighlightBlock highlights={highlightBoxProps} />
      <TravelsBlockWithColor
        color="#E6F2F2"
        guideContainer={{
          guides: guidesBoxProps,
        }}
        categoryContainer={{
          categories: categoriesBoxProps,
        }}
      />
      <FooterBlockWithColor
        color="#001A1A"
        image={footerProps.image}
      />
    </div>
  );
}

export default App;
