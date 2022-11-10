import { useIntl } from "react-intl";
import phoneAddSrc from "../../assets/phoneAdd.png";
import phoneImportSrc from "../../assets/phoneImport.png";
import phoneSelectSrc from "../../assets/phoneSelect.png";
import { getV2rayConfig } from "../../utils/getV2rayConfig";
import useI18nTranslations from "./i18nTranslations";
import PhoneContentView from "./PhoneContentView";

const PhoneContentContainer = () => {
  const intl = useIntl();
  const imageAssestSrc = {
    phoneAddSrc,
    phoneImportSrc,
    phoneSelectSrc,
  };
  const i18nTranslations = useI18nTranslations(intl);

  const onCopyConfigButtonClick =()=>{
    getV2rayConfig()
  }
  return (
    <PhoneContentView
      imageAssestSrc={imageAssestSrc}
      i18nTranslations={i18nTranslations}
      onCopyConfigButtonClick={onCopyConfigButtonClick}
    />
  );
};

export default PhoneContentContainer;
