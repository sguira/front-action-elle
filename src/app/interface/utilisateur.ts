export class Utilisateur {

  username?:string;
  name?:string;
  phone?:string;
  adresse?:string
  password?:string;
  createdAt?:string;
  cin?:string

  constructor(data:Partial<Utilisateur>){
    Object.assign(data)
  }


}
