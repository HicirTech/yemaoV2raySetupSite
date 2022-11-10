interface IPhoneContentView {
  i18nTranslations: {
    phoneSetupWelcomeParagraphBodyText: string;
    phoneSetupWelcomeParagraphSecondaryBodyText: string;
    phoneSetupDownloadParagraphTitleText: string;
    phoneSetupDownloadParagraphBodyText: string;
    phoneSetupInstallParagraphTitleText: string;
    phoneSetupInstallParagraphBodyText: string;
    phoneSetupCopyConfigParagraphTitleText: string;
    phoneSetupCopyConfigParagraphBodyText: string;
    phoneSetupCopyConfigParagraphSecondaryBodyText: string;
    phoneSetupCopyConfigParagraphButtonAriaLabel: string;
    phoneSetupCopyConfigParagraphButtonText: string;
    phoneSetupConfigStep1ParagraphTitleText: string;
    phoneSetupConfigStep1ParagraphBodyText: string;
    phoneSetupConfigStep1ParagraphSecondaryBodyText: string;
    phoneSetupConfigStep2ParagraphTitleText: string;
    phoneSetupConfigStep3ParagraphTitleText: string;
    phoneSetupConfigStep3ParagraphBodyText: string;
    phoneSetupConnectParagraphTitleText: string;
    phoneSetupConnectParagraphBodyText: string;
    phoneSetupWelcomeParagraphTitleText: string;
  };
  imageAssestSrc: {
    phoneAddSrc: string;
    phoneImportSrc: string;
    phoneSelectSrc: string;
  };
  onCopyConfigButtonClick:()=>void;
}

export default IPhoneContentView;
