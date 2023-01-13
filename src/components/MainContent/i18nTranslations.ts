import { IntlShape } from "react-intl";
import moment from "moment";

const ENV_LAST_UPDATED = import.meta.env.VITE_LAST_UPDATED;
const developmentDate = moment(ENV_LAST_UPDATED);

const useI18nTranslations = (intl: IntlShape) => ({
  headerText: intl.formatMessage({ id: "headerText" }),
  clientDownloadHeaderTitleText: intl.formatMessage({
    id: "clientDownloadHeaderTitleText",
  }),
  clientDownloadHeaderBodyText: intl.formatMessage({
    id: "clientDownloadHeaderBodyText",
  }),
  headerUpdateTime: intl.formatMessage(
    {
      id: "headerUpdateTime",
    },
    {
      0: developmentDate.format("DD/MM/YYYY"),
      1: Math.ceil(moment().diff(developmentDate, "days") + 1),
    }
  ),
});

export default useI18nTranslations;
