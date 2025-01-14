import { Categorie } from "./categorie";
import { Garantie } from "./garantie";

export class ProduitAssure{

  // id: number;

  constructor(
    public id: string,
    public nom: string,
    public categories:Categorie[],
    public garanties:Garantie[]
  ){

  }
}
