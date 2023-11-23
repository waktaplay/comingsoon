import { useEffect } from "react";

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
import text from "./assets/text.svg";

export default function Maintenance() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language.split("-")[0]);

    document.documentElement.lang = navigator.language.split("-")[0];
    document.title = i18n.t("maintenance.title").replace("<1>", "").replace("</1>", "");
  }, [i18n]);

  return (
    <div css={appCSS}>
      <header css={headerCSS}>
        <img src={logo} css={headerImgCSS} />
        <img src={text} css={logoTitleCSS} />
      </header>
      <main css={mainCSS}>
        <h1 css={titleCSS}>
          <Trans i18nKey="maintenance.title">
            서비스 <span css={titleHighlightCSS}>점검 중</span>이에요!
          </Trans>
        </h1>
        <p css={contentCSS}>{t("maintenance.desc1")}</p>
        <p css={contentCSS}>{t("maintenance.desc2")}</p>
        <footer css={footerCSS}>
          <img src={logo} css={footerIconCSS} />
          <img src={text} css={footerTitleCSS} />
        </footer>
      </main>
    </div>
  );
}
