import { useIntl } from "react-intl";
import {
  ANDROID_V2RAY_FILE_NAME,
  getFileByNameAsync,
  PC_V2RAY_FILE_NAME,
} from "../../utils/getFileUrl";
import DownloadButtonHeaderView from "./DownloadButtonHeaderView";
import useI18nTranslations from "./i18nTranslations";

const DownloadButtonHeaderContainer = () => {
  const intl = useIntl();

  const onPcDownloadButtonClick = async () => {
    getFileByNameAsync(PC_V2RAY_FILE_NAME);
  };
  const onPhoneDownloadButtonClick = async () => {
    getFileByNameAsync(ANDROID_V2RAY_FILE_NAME);
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
