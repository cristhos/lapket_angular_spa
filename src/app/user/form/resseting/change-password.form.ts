export class ChangePasswordFormModel {
  constructor(
    public password : string,
    public confirmePassword : string,
    public tokenConfirmation : any
  ) { }
}
