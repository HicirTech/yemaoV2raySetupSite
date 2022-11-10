import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextDescription from "../TextDescription";
import IPCContentView from "./IPCContentView";

const PCContentView = ({
  i18nTranslations,
  imageAssestSrc,
}: IPCContentView) => {
  return (
    <Box>
      <TextDescription
        titleText={i18nTranslations.pcSetupWelcomeParagraphTitleText}
        bodyText={i18nTranslations.pcSetupWelcomeParagraphBodyText}
        secondBodyText={
          i18nTranslations.pcSetupWelcomeParagraphSecondaryBodyText
        }
      />
      <Divider />
      <TextDescription
        titleText={i18nTranslations.pcSetupUnzipParagraphTitleText}
        bodyText={i18nTranslations.pcSetupUnzipParagraphBodyText}
        imgSrc={imageAssestSrc.pcFolderUnzipSrc}
      />
      <TextDescription
        titleText={i18nTranslations.pcSetupRunParagraphTitleText}
        bodyText={i18nTranslations.pcSetupRunParagraphBodyText}
        imgSrc={imageAssestSrc.pcExeLocationSrc}
      />
      <TextDescription
        titleText={i18nTranslations.pcSetupEnableParagraphTitleText}
        bodyText={i18nTranslations.pcSetupEnableParagraphBodyText}
        imgSrc={imageAssestSrc.pcIconsSrc}
      />

      <TextDescription
        titleText={i18nTranslations.pcSetupStartedParagraphTitleText}
        bodyText={i18nTranslations.pcSetupStartedParagraphBodyText}
        imgSrc={imageAssestSrc.pcClientStartSrc}
      />
      <TextDescription
        titleText={i18nTranslations.pcSetupShutdownParagraphTitleText}
        bodyText={i18nTranslations.pcSetupShutdownParagraphBodyText}
      />
    </Box>
  );
};

export default PCContentView;
