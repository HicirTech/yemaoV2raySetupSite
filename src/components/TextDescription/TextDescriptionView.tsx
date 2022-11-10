import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ITextDescriptionView from "./ITextDescriptionView";

const useStyles = makeStyles({
  imgSizeLimite: { width: "auto", maxHeight: "45vh", maxWidth: "80vw" },
  paragraph: {
    margin: "18px auto",
  },
  spacer: {
    marginBottom: "16px",
  },
  doubleSpacer: {
    marginBottom: "36px",
  },
});

const TextDescriptionView = ({
  titleText,
  bodyText,
  imgSrc,
  children,
  secondBodyText,
}: ITextDescriptionView) => {
  const { imgSizeLimite, paragraph, spacer, doubleSpacer } = useStyles();

  return (
    <Box className={paragraph}>
      <Box>
        <Typography variant="h6">{titleText}</Typography>
      </Box>
      {bodyText && (
        <Box className={spacer}>
          <Typography variant="body2">{bodyText}</Typography>
        </Box>
      )}

      <Box className={secondBodyText ? spacer : doubleSpacer}>
        {secondBodyText && (
          <Typography variant="body1">{secondBodyText}</Typography>
        )}
        {children && children}
        {imgSrc && <img src={imgSrc} className={imgSizeLimite} />}
      </Box>
    </Box>
  );
};

export default TextDescriptionView;
