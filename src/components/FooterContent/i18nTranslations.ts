import { IntlShape } from "react-intl";

const useI18nTranslations = (intl: IntlShape) => ({
  commentIssues: intl.formatMessage({ id: "commentIssues" }),
  commentIssues1Q: intl.formatMessage({ id: "commentIssues1Q" }),
  commentIssues1A: intl.formatMessage({ id: "commentIssues1A" }),
  commentIssues2Q: intl.formatMessage({ id: "commentIssues2Q" }),
  commentIssues2A: intl.formatMessage({ id: "commentIssues2A" }),
  commentIssues3Q: intl.formatMessage({ id: "commentIssues3Q" }),
  commentIssues3A: intl.formatMessage({ id: "commentIssues3A" }),
  commentIssues4Q: intl.formatMessage({ id: "commentIssues4Q" }),
  commentIssues4A: intl.formatMessage({ id: "commentIssues4A" }),
  commentIssues5Q: intl.formatMessage({ id: "commentIssues5Q" }),
  commentIssues5A: intl.formatMessage({ id: "commentIssues5A" }),
  commentIssues6Q: intl.formatMessage({ id: "commentIssues6Q" }),
  commentIssues6A: intl.formatMessage({ id: "commentIssues6A" }),
});

export default useI18nTranslations;
