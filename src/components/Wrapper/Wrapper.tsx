import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme } from "../../theme";
import StaticBackground from "../StaticBackground";
import IWrapper from "./IWrapper";
import BackgroundSrc from "../../assets/bg.jpg";
import { IntlProvider } from "react-intl";
import { getChineseTranslation } from "../../utils/getTranslation";
import { useEffect, useState } from "react";

const Wrapper = ({ children }: IWrapper) => {
  const [translations, setTranslations] = useState<any>(undefined);

  useEffect(() => {
    getChineseTranslation().then((translationsResponse) =>
      setTranslations(translationsResponse)
    );
  }, []);
  
  if (!translations) {
    return <></>;
  }

  return (
    <IntlProvider messages={translations} locale="zh" defaultLocale="zh">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
        <StaticBackground src={BackgroundSrc} />
      </ThemeProvider>
    </IntlProvider>
  );
};

export default Wrapper;
