interface IDownloadButtonHeaderView {
  onPcDownloadButtonClick: () => void;
  onPhoneDownloadButtonClick: () => void;
  i18nTranslations: {
    phoneClinetAriaLabel: string;
    phoneClinetText: string;
    pcClinetAriaLabel: string;
    pcClinetText: string;
  };
}
export default IDownloadButtonHeaderView;
