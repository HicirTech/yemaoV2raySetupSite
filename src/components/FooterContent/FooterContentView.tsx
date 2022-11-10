import Box from "@mui/material/Box";
import TextDescription from "../TextDescription";
import IFooterContentView from "./IFooterContentView";

const FooterContentView = ({ i18nTranslations }: IFooterContentView) => {
  return (
    <Box>
      <TextDescription titleText={i18nTranslations.commentIssues} />
      <TextDescription
        titleText={i18nTranslations.commentIssues1Q}
        bodyText={i18nTranslations.commentIssues1A}
      />
      <TextDescription
        titleText={i18nTranslations.commentIssues2Q}
        bodyText={i18nTranslations.commentIssues2A}
      />
      <TextDescription
        titleText={i18nTranslations.commentIssues3Q}
        bodyText={i18nTranslations.commentIssues3A}
      />
      <TextDescription
        titleText={i18nTranslations.commentIssues4Q}
        bodyText={i18nTranslations.commentIssues4A}
      />
      <TextDescription
        titleText={i18nTranslations.commentIssues5Q}
        bodyText={i18nTranslations.commentIssues5A}
      />
      <TextDescription
        titleText={i18nTranslations.commentIssues6Q}
        bodyText={i18nTranslations.commentIssues6A}
      />
    </Box>
  );
};

export default FooterContentView;
