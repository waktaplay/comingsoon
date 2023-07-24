import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Trans, useTranslation } from "react-i18next";
import {
  appCSS,
  headerCSS,
  headerImgCSS,
  logoTitleCSS,
  mainCSS,
  titleCSS,
  titleHighlightCSS,
  contentCSS,
  footerCSS,
  footerIconCSS,
  footerTitleCSS,
} from "./styles/emotion/app";

import logo from "./assets/logo.svg";

import "./utils/i18n/maintenance";
import "./styles/common.css";

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language.split("-")[0]);

    document.documentElement.lang = navigator.language.split("-")[0];
    document.title = i18n.t("title").replace("<1>", "").replace("</1>", "");
  }, [i18n]);

  return (
    <div css={appCSS}>
      <header css={headerCSS}>
        <img src={logo} css={headerImgCSS} />
        <p css={logoTitleCSS}>WAKTAPLAY</p>
      </header>
      <main css={mainCSS}>
        <h1 css={titleCSS}>
          <Trans i18nKey="title">
            서비스 <span css={titleHighlightCSS}>점검 중</span>이에요!
          </Trans>
        </h1>
        <p css={contentCSS}>{t("desc1")}</p>
        <p css={contentCSS}>{t("desc2")}</p>
        <footer css={footerCSS}>
          <img src={logo} css={footerIconCSS} />
          <p css={footerTitleCSS}>{t("brand")}</p>
        </footer>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
