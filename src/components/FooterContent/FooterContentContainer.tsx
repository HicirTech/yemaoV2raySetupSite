import { useIntl } from "react-intl";
import FooterContentView from "./FooterContentView";
import useI18nTranslations from "./i18nTranslations";

const FooterContentContainer = () => {
  const intl = useIntl();

  const i18nTranslations = useI18nTranslations(intl);

  return (
    <FooterContentView
      i18nTranslations={i18nTranslations}
    />
  );
};

export default FooterContentContainer;
