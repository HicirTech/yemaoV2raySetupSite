import { IntlShape } from "react-intl";

const useI18nTranslations = (intl: IntlShape) => ({
  phoneClinetAriaLabel: intl.formatMessage({ id: "phoneClinetAriaLabel" }),
  phoneClinetText: intl.formatMessage({ id: "phoneClinetText" }),
  pcClinetAriaLabel: intl.formatMessage({ id: "pcClinetAriaLabel" }),
  pcClinetText: intl.formatMessage({ id: "pcClinetText" }),
});

export default useI18nTranslations;
