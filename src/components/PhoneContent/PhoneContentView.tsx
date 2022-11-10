import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextDescription from "../TextDescription";
import IPhoneContentView from "./IPhoneContentView";

const PhoneContentView = ({
  i18nTranslations,
  imageAssestSrc,
  onCopyConfigButtonClick
}: IPhoneContentView) => {
  return (
    <Box>
      <TextDescription
        titleText={i18nTranslations.phoneSetupWelcomeParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupWelcomeParagraphBodyText}
        secondBodyText={
          i18nTranslations.phoneSetupWelcomeParagraphSecondaryBodyText
        }
      />
      <Divider />
      <TextDescription
        titleText={i18nTranslations.phoneSetupDownloadParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupDownloadParagraphBodyText}
      />
      <TextDescription
        titleText={i18nTranslations.phoneSetupInstallParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupInstallParagraphBodyText}
      />
      <TextDescription
        titleText={i18nTranslations.phoneSetupCopyConfigParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupCopyConfigParagraphBodyText}
        secondBodyText={
          i18nTranslations.phoneSetupCopyConfigParagraphSecondaryBodyText
        }
      >
        <Button
          aria-label={
            i18nTranslations.phoneSetupCopyConfigParagraphButtonAriaLabel
          }
          variant="outlined"
          onClick={onCopyConfigButtonClick}
        >
          {i18nTranslations.phoneSetupCopyConfigParagraphButtonText}
        </Button>
      </TextDescription>

      <TextDescription
        titleText={i18nTranslations.phoneSetupConfigStep1ParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupConfigStep1ParagraphBodyText}
        secondBodyText={
          i18nTranslations.phoneSetupConfigStep1ParagraphSecondaryBodyText
        }
        imgSrc={imageAssestSrc.phoneAddSrc}
      />

      <TextDescription
        titleText={i18nTranslations.phoneSetupConfigStep2ParagraphTitleText}
        imgSrc={imageAssestSrc.phoneSelectSrc}
      />

      <TextDescription
        titleText={i18nTranslations.phoneSetupConfigStep3ParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupConfigStep3ParagraphBodyText}
        imgSrc={imageAssestSrc.phoneImportSrc}
      />

      <TextDescription
        titleText={i18nTranslations.phoneSetupConnectParagraphTitleText}
        bodyText={i18nTranslations.phoneSetupConnectParagraphBodyText}
      />
    </Box>
  );
};

export default PhoneContentView;
