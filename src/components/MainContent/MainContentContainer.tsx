import { useState } from "react";
import { useIntl } from "react-intl";
import useI18nTranslations from "./i18nTranslations";
import MainContentView from "./MainContentView";

const MainContentContainer = () => {
  const intl = useIntl();
  const [userAuthDone, setUserAuthDone] = useState(false);

  const i18nTranslations = useI18nTranslations(intl);
  const onAuthenticationSuccess = () => {
    setUserAuthDone(true);
  };

  return (
    <MainContentView
      i18nTranslations={i18nTranslations}
      userAuthDone={userAuthDone}
      onAuthenticationSuccess={onAuthenticationSuccess}
    />
  );
};

export default MainContentContainer;
