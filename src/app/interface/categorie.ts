

export class Categorie{
  id?: string;
  name?: string;
  description?:string;

  constructor(data:Partial<Categorie>){
    Object.assign(data)
  }

}
