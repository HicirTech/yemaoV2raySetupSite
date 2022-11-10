import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import DownloadButtonHeader from "../DownloadButtonHeader";
import FooterContent from "../FooterContent";
import PCContent from "../PCContent";
import PhoneContent from "../PhoneContent";
import TextDescription from "../TextDescription";
import UserAuthenticator from "../UserAuthenticator";
import IMainContentView from "./IMainContentView";

const useStyles = makeStyles({
  outerBox: {
    padding: "0px 20px 20px 20px",
  },
  contentContainerBeforeAuth: {},
  contentContainerAfterAuth: {
    width: "100% !important",
  },
  containContainer: {
    minHeight: "100px",
    zIndex: "3",
    width: "650px",
    marginTop: "20vh",
    backgroundColor: "#30363dCC  !important",
    position: "relative",
    padding: "20px",
    transition: "all 0.5s !important",
  },
  header: {
    width: "100%",
    margin: "15vh auto 0 auto",
    textAlign: "center",
  },
  paperContent: {
    color: "#1A1A1A",
  },
  passwordInputBox: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: "16px",
    transition: "all 0.5s !important",
  },
  passwordInputBoxAfterAuth: {
    height: "0",
  },
});

const MainContentView = ({
  i18nTranslations,
  userAuthDone,
  onAuthenticationSuccess,
}: IMainContentView) => {
  const classes = useStyles();

  return (
    <Box className={classes.outerBox}>
      <Box className={classes.header}>
        <Fade in timeout={1000}>
          <Typography variant="h2">{i18nTranslations.headerText}</Typography>
        </Fade>
      </Box>
      <Fade in timeout={500}>
        <Paper
          className={`${classes.containContainer} ${classes.paperContent} ${
            userAuthDone
              ? classes.contentContainerAfterAuth
              : classes.contentContainerBeforeAuth
          }`}
        >
          <Grow in={!userAuthDone} timeout={500} unmountOnExit>
            <Box
              className={`${classes.passwordInputBox} ${
                userAuthDone && classes.passwordInputBoxAfterAuth
              }`}
            >
              <UserAuthenticator
                onAuthenticationSuccess={onAuthenticationSuccess}
              />
            </Box>
          </Grow>
          <Fade in={userAuthDone} timeout={1000} unmountOnExit>
            <Box>
              <TextDescription
                titleText={i18nTranslations.clientDownloadHeaderTitleText}
                bodyText={i18nTranslations.clientDownloadHeaderBodyText}
              >
                <DownloadButtonHeader />
              </TextDescription>
              <Divider />

              <PCContent />
              <Divider />

              <PhoneContent />
              <Divider />

              <FooterContent />
            </Box>
          </Fade>
        </Paper>
      </Fade>
    </Box>
  );
};

export default MainContentView;
