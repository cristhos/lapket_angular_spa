export class ProductFormModel {
  constructor(
    public picture: number,
    public name : string,
    public description : string,
    public price : number,
    public album_id : number
  ) { }
}
