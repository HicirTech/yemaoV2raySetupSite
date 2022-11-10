import pcClientStartSrc from "../../assets/pcClientStart.png";
import pcFolderUnzipSrc from "../../assets/folderUnzip.png";
import pcIconsSrc from "../../assets/pcIcons.png";
import pcExeLocationSrc from "../../assets/pcExeLocation.png";
import useI18nTranslations from "./i18nTranslations";
import { useIntl } from "react-intl";
import PCContentView from "./PCContentView";

const PCContentContainer = () => {
  const intl = useIntl();
  const imageAssestSrc = {
    pcClientStartSrc,
    pcFolderUnzipSrc,
    pcIconsSrc,
    pcExeLocationSrc,
  };
  const i18nTranslations = useI18nTranslations(intl);

  return (
    <PCContentView
      imageAssestSrc={imageAssestSrc}
      i18nTranslations={i18nTranslations}
    />
  );
};

export default PCContentContainer;
