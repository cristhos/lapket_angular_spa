export class ProfileFormModel {
  constructor(
    public picture:number,
    public username : string,
    public email :  string ,
    public fullName: string,
    public country :  string ,
    public city : string ,
    public gender: string ,
    public language : string,
    public phone_number: string,
    public birthday: Date,
    public description : string,
    public web_site: string,
    public is_mail_notify : boolean
  ) { }
}