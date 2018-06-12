export class ArmorModule {

  Id: string;
  Title: string;
  Description: string;
  ImgSrc: string;

  constructor(id?: string, title?: string, description?: string, img?: string) {
    this.Id = id;
    this.Title = title;
    this.Description = description;
    this.ImgSrc = img;

  }
}
