import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import IDownloadButtonHeaderView from "./IDownloadButtonHeaderView";

const useStyles = makeStyles({
  buttonBox: {
    display: "flex",
    gap: "8px",
  },
});

const DownloadButtonHeaderView = ({
  onPcDownloadButtonClick,
  onPhoneDownloadButtonClick,
  i18nTranslations,
}: IDownloadButtonHeaderView) => {
  const { buttonBox } = useStyles();

  return (
    <Box className={buttonBox}>
      <Button
        aria-label={i18nTranslations.phoneClinetAriaLabel}
        variant="outlined"
        onClick={onPhoneDownloadButtonClick}
      >
        {i18nTranslations.phoneClinetText}
      </Button>
      <Button
        aria-label={i18nTranslations.pcClinetAriaLabel}
        variant="outlined"
        onClick={onPcDownloadButtonClick}
      >
        {i18nTranslations.pcClinetText}
      </Button>
    </Box>
  );
};

export default DownloadButtonHeaderView;
