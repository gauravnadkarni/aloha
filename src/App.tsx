import {Container} from "@mui/material";
import {FC} from "react";
import "./App.css";
import {FooterProps} from "./components/footer/FooterBox";
import {AppBarPropsWithClickEvent} from "./components/top-bar/AppBar";
import TitleBox from "./components/top-bar/TitleBox";
import withColoredBlock from "./components/withColoredBlock";
import Footer from "./containers/Footer";
import Highlights, {HighlightProps} from "./containers/Highlights";
import Travels, {TravelsProps} from "./containers/Travels";
import DATA from "./data/data.json";

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
  const TravelsBlockWithColor = withColoredBlock(TravelsBlock);
  const FooterBlockWithColor = withColoredBlock(FooterBlock);
  const appBarConfigWithClickEvent = {
    ...DATA.titleBoxData.appBarConfig,
    onClickOfItem: (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e);
    },
  };
  return (
    <div className="App">
      <TitleBox
        image={DATA.titleBoxData.image}
        text={DATA.titleBoxData.text}
        appBarConfig={appBarConfigWithClickEvent as AppBarPropsWithClickEvent}
      />
      <HighlightBlock highlights={DATA.highlightsData} />
      <TravelsBlockWithColor
        color="#E6F2F2"
        guideContainer={{
          guides: DATA.travelsData.guidesData,
        }}
        categoryContainer={{
          categories: DATA.travelsData.categoriesData,
        }}
      />
      <FooterBlockWithColor
        color="#001A1A"
        image="/assets/images/footer_image.png"
      />
    </div>
  );
}

export default App;
