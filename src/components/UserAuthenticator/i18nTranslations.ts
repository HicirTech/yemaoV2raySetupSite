import { IntlShape } from "react-intl";

const useI18nTranslations = (intl: IntlShape) => ({
  userAuthenticatorTitleText: intl.formatMessage({
    id: "userAuthenticatorTitleText",
  }),
  userAuthenticatorHelperText: intl.formatMessage({
    id: "userAuthenticatorHelperText",
  }),
  userAuthenticatorPlaceholder: intl.formatMessage({
    id: "userAuthenticatorPlaceholder",
  }),
  userAuthenticatorAriaLabel: intl.formatMessage({
    id: "userAuthenticatorAriaLabel",
  }),
});

export default useI18nTranslations;
