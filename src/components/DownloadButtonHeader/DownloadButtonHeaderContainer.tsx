import { useIntl } from "react-intl";
import { getFileByNameAsync } from "../../utils/getFileUrl";
import DownloadButtonHeaderView from "./DownloadButtonHeaderView";
import useI18nTranslations from "./i18nTranslations";

const DownloadButtonHeaderContainer = () => {
  const intl = useIntl();

  const onPcDownloadButtonClick = async () => {
    getFileByNameAsync("V2rayPC");
  };
  const onPhoneDownloadButtonClick = async () => {
    getFileByNameAsync("v2rayPhone");
  };
  
  const i18nTranslations = useI18nTranslations(intl);

  return (
    <DownloadButtonHeaderView
      onPcDownloadButtonClick={onPcDownloadButtonClick}
      onPhoneDownloadButtonClick={onPhoneDownloadButtonClick}
      i18nTranslations={i18nTranslations}
    />
  );
};

export default DownloadButtonHeaderContainer;
