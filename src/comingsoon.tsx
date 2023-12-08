import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

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

import waktaplayLogo from "./assets/waktaplay-logo.svg";
import waktaplayText from "./assets/waktaplay-text.svg";

export default function ComingSoon() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  const isWaktaplay = window.location.hostname.includes('waktaplay.com') || window.location.hostname.includes('billboardoo.com');

  useEffect(() => {
    i18n.changeLanguage(searchParams.get('lang') || navigator.language.split("-")[0]);

    document.documentElement.lang = searchParams.get('lang') || navigator.language.split("-")[0];
    document.title = i18n.t("comingsoon.title").replace("<1>", "").replace("</1>", "");
  }, [i18n]);

  return (
    <div css={appCSS}>
      <header css={[headerCSS, css({ gap: isWaktaplay ? '18px' : '12px' })]}>
        <img src={isWaktaplay ? waktaplayLogo : logo} css={headerImgCSS} />
        <img src={isWaktaplay ? waktaplayText : text} css={logoTitleCSS} />
      </header>
      <main css={mainCSS}>
        <h1 css={titleCSS}>
          <Trans i18nKey="comingsoon.title">
            서비스 <span css={titleHighlightCSS}>오픈 준비 중</span>이에요
          </Trans>
        </h1>
        <p css={contentCSS}>{t("comingsoon.desc1").replace("{}", t(isWaktaplay ? "brand.waktaplay" : "brand.spacewak"))}</p>
        <p css={contentCSS}>{t("comingsoon.desc2")}</p>
        <footer css={[footerCSS, css({ gap: isWaktaplay ? '14px' : '8px' })]}>
          <img src={isWaktaplay ? waktaplayLogo : logo} css={footerIconCSS} />
          <img src={isWaktaplay ? waktaplayText : text} css={footerTitleCSS} />
        </footer>
      </main>
    </div>
  );
}
