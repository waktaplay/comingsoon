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
