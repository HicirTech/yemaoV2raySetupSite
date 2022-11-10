import { IntlShape } from "react-intl";

const useI18nTranslations = (intl: IntlShape) => ({
  pcSetupWelcomeParagraphTitleText: intl.formatMessage({
    id: "pcSetupWelcomeParagraphTitleText",
  }),
  pcSetupWelcomeParagraphBodyText: intl.formatMessage({
    id: "pcSetupWelcomeParagraphBodyText",
  }),
  pcSetupWelcomeParagraphSecondaryBodyText: intl.formatMessage({
    id: "pcSetupWelcomeParagraphSecondaryBodyText",
  }),
  pcSetupUnzipParagraphTitleText: intl.formatMessage({
    id: "pcSetupUnzipParagraphTitleText",
  }),
  pcSetupUnzipParagraphBodyText: intl.formatMessage({
    id: "pcSetupUnzipParagraphBodyText",
  }),
  pcSetupRunParagraphTitleText: intl.formatMessage({
    id: "pcSetupRunParagraphTitleText",
  }),
  pcSetupRunParagraphBodyText: intl.formatMessage({
    id: "pcSetupRunParagraphBodyText",
  }),
  pcSetupEnableParagraphTitleText: intl.formatMessage({
    id: "pcSetupEnableParagraphTitleText",
  }),
  pcSetupEnableParagraphBodyText: intl.formatMessage({
    id: "pcSetupEnableParagraphBodyText",
  }),
  pcSetupStartedParagraphTitleText: intl.formatMessage({
    id: "pcSetupStartedParagraphTitleText",
  }),
  pcSetupStartedParagraphBodyText: intl.formatMessage({
    id: "pcSetupStartedParagraphBodyText",
  }),
  pcSetupShutdownParagraphTitleText: intl.formatMessage({
    id: "pcSetupShutdownParagraphTitleText",
  }),
  pcSetupShutdownParagraphBodyText: intl.formatMessage({
    id: "pcSetupShutdownParagraphBodyText",
  }),
});

export default useI18nTranslations;
