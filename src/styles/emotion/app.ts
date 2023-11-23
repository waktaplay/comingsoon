import { css } from "@emotion/react";

const appCSS = css({
  height: "100vh",
  color: "#171717",
  "@media (prefers-color-scheme: dark)": {
    color: "#ffffff",
    backgroundColor: "#171717",
  },
});

const headerCSS = css({
  gap: "12px",
  display: "flex",
  alignItems: "center",
  width: "200px",
  position: "fixed",
  padding: "30px 40px",
  "@media (max-width: 580px)": {
    padding: "22px 25px",
  },
});

const headerImgCSS = css({
  height: "38px",
  "@media (max-width: 580px)": {
    height: "30px",
  },
});

const logoTitleCSS = css({
  height: "16px",
  "@media (max-width: 580px)": {
    height: "10px",
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
  background: "linear-gradient(90deg, #47f998 0%, #60e2d2 100%)",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent"
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
  gap: "8px",
  display: "flex",
  marginTop: "40px",
  alignItems: "center",
});

const footerIconCSS = css({
  height: "30px",
  "@media (max-width: 580px)": {
    height: "25px",
  },
});

const footerTitleCSS = css({
  height: "12px",
  "@media (max-width: 580px)": {
    height: "10px",
  },
});

export {
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
};
