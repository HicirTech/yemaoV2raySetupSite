import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IUserAuthenticatorView from "./IUserAuthenticatorView";

const UserAuthenticatorView = ({
  hasError,
  inputValue,
  onInputValueChange,
  i18nTranslations,
}: IUserAuthenticatorView) => {
  return (
    <Box>
      <Typography variant="h6">
        {i18nTranslations.userAuthenticatorTitleText}
      </Typography>
      <TextField
        error={hasError}
        helperText={
          hasError ? i18nTranslations.userAuthenticatorHelperText : null
        }
        color="primary"
        value={inputValue}
        type="password"
        aria-label={i18nTranslations.userAuthenticatorAriaLabel}
        placeholder={i18nTranslations.userAuthenticatorPlaceholder}
        onChange={onInputValueChange}
      />
    </Box>
  );
};

export default UserAuthenticatorView;
