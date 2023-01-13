interface IMainContentView {
  i18nTranslations: {
    clientDownloadHeaderTitleText: string;
    clientDownloadHeaderBodyText: string;
    headerText: string;
    headerUpdateTime: string;
  };
  onAuthenticationSuccess: () => void;
  userAuthDone: boolean;
}
export default IMainContentView;
