interface IUserAuthenticatorView {
  hasError:boolean;
  inputValue:string;
  onInputValueChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  i18nTranslations: {
    userAuthenticatorTitleText: string;
    userAuthenticatorHelperText: string;
    userAuthenticatorPlaceholder: string;
    userAuthenticatorAriaLabel: string;
  };
}
export default IUserAuthenticatorView;
