import { useEffect } from "react";

import { css } from "@emotion/react";
import { Trans, useTranslation } from "react-i18next";

import "./utils/i18n";

import logo from "./assets/logo.svg";

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
            서비스 <span css={titleHighlightCSS}>오픈 준비 중</span>이에요
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

const appCSS = css({
  height: "100vh",
  color: "#171717",
  "@media (prefers-color-scheme: dark)": {
    color: "#ffffff",
    backgroundColor: "#171717",
  },
});

const headerCSS = css({
  display: "flex",
  width: "200px",
  position: "fixed",
  padding: "30px 40px",
  "@media (max-width: 580px)": {
    padding: "22px 25px",
  },
});

const headerImgCSS = css({
  height: "45px",
  "@media (max-width: 580px)": {
    height: "38px",
  },
});

const logoTitleCSS = css({
  fontFamily: "GoyangDeogyang",
  marginLeft: "6px",
  marginTop: "13px",
  fontSize: "18px",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const mainCSS = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

const titleCSS = css({
  fontSize: "50px",
  fontWeight: "bolder",
  marginBottom: "40px",
  "@media (max-width: 580px)": {
    fontSize: "25px",
  },
  "@media (max-width: 330px)": {
    fontSize: "22px",
  },
});

const titleHighlightCSS = css({
  color: "#b7fb9c",
});

const contentCSS = css({
  marginBottom: "18px",
  fontSize: "17px",
  fontWeight: "300",
  "@media (max-width: 580px)": {
    fontSize: "12px",
  },
  "@media (max-width: 330px)": {
    fontSize: "10px",
  },
});

const footerCSS = css({
  display: "flex",
  marginTop: "40px",
  alignItems: "center",
});

const footerIconCSS = css({
  height: "32px",
  "@media (max-width: 580px)": {
    fontSize: "29px",
  },
});

const footerTitleCSS = css({
  fontFamily: "GoyangDeogyang",
  marginLeft: "6px",
  marginTop: "19px",
  fontSize: "18px",
  "@media (max-width: 580px)": {
    marginTop: "17px",
    fontSize: "15px",
  },
});
