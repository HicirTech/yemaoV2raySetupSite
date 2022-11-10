import { IntlShape } from "react-intl";

const useI18nTranslations = (intl: IntlShape) => ({
  headerText: intl.formatMessage({ id: "headerText" }),
  clientDownloadHeaderTitleText: intl.formatMessage({
    id: "clientDownloadHeaderTitleText",
  }),
  clientDownloadHeaderBodyText: intl.formatMessage({
    id: "clientDownloadHeaderBodyText",
  }),
});

export default useI18nTranslations;
