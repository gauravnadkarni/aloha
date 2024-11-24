import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DATA from "./data/data.json";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./helpers/theme";
import DataProvider from "./providers/DataProvider";
import { TitleBoxProps } from "./components/top-bar/TitleBox";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <DataProvider
      categoriesBoxProps={DATA.travelsData.categoriesData}
      guidesBoxProps={DATA.travelsData.guidesData}
      highlightBoxProps={DATA.highlightsData}
      titleBoxProps={
        {
          ...DATA.titleBoxData,
          appBarConfig:{
            ...DATA.titleBoxData.appBarConfig,
            onClickOfItem: (e: React.MouseEvent<HTMLButtonElement>) => {
              console.log(e);
            }
          }
        } as TitleBoxProps
      }
      footerProps={DATA.footerData}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
