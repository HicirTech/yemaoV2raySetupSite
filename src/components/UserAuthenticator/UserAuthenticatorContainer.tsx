import { ChangeEvent, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDebounce } from "use-debounce";
import { checkPasswordAsync } from "../../utils/checkPassword";
import useI18nTranslations from "./i18nTranslations";
import IUserAuthenticatorContainer from "./IUserAuthenticatorContainer";
import UserAuthenticatorView from "./UserAuthenticatorView";

const UserAuthenticatorContainer = ({
  onAuthenticationSuccess,
}: IUserAuthenticatorContainer) => {
  const intl = useIntl();

  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [value] = useDebounce(inputValue, 500);

  const i18nTranslations = useI18nTranslations(intl);

  const onInputValueChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onError = () => {
    setHasError(true);
  };
  const onSuccess = () => {
    setHasError(false);
    onAuthenticationSuccess();
  };

  useEffect(() => {
    if (value) {
      checkPasswordAsync(value).then((result) => {
        result ? onSuccess() : onError();
      });
    }
  }, [value]);

  return (
    <UserAuthenticatorView
      hasError={hasError}
      inputValue={inputValue}
      onInputValueChange={onInputValueChange}
      i18nTranslations={i18nTranslations}
    />
  );
};
export default UserAuthenticatorContainer;
