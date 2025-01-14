export class Garantie{
  constructor(
    public id: string,
    public name:string,
    public rate:number,
    public maxAge:number,
    public minPrime:string
  ){}
}
