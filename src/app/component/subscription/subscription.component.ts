import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/interface/categorie';
import { ProduitAssure } from 'src/app/interface/produit';
import { CategorieService } from 'src/app/service/categorie.service';
import { SouscriptionService } from 'src/app/service/souscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {

  currentForm:number=1

  // categorie:Categorie[]=

  formVehicule?:FormGroup;
  formPersonne?:FormGroup
  formProduct:FormGroup=this.fb.group({
    produitId:['',Validators.required]
  })
  labelCategorie:string=""

  produitId:any

  constructor(public fb:FormBuilder,public categorieService:CategorieService,public souscriptionService:SouscriptionService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formVehicule=this.fb.group({
      dateMiseCirculation:['',Validators.required],
      matriculation:['',Validators.required],
      couleur:['',Validators.required],
      nbPortes:['',Validators.required],
      nbSieges:['',Validators.required],
      categorie:['',Validators.required],
      nomModel:['',Validators.required],
      valeurVenale:['',Validators.required],
      prixDachat:['',Validators.required],
      puissance:['',Validators.required]
    })

    //initialisation des champs pour le client
    this.formPersonne=this.fb.group({
      adresse:['',Validators.required],
      telephone:['',Validators.required],
      name:['',Validators.required],
      city:['',Validators.required],
      cin:['',Validators.required],
      // categorie:['',Validators.required]
    })



  }

  nextForm(){
    console.log("suivant")
    if(this.currentForm<3){
      this.currentForm=this.currentForm+1;
    }
  }

  backForm(){
    console.log("suivant")
    if(this.currentForm>1){
      this.currentForm=this.currentForm-1;
    }
  }

  validationVehicule(){
    console.log(this.formVehicule!.value)
  }

  validationAssure(){
    console.log(this.formPersonne!.value)
  }

  selectProductByCode(code:string):ProduitAssure[]{
    let product=[]
    let categorie=this.categorieService.getCategorieByIds([code])[0]

    for(let element of this.categorieService.product){
      for(let cat of element.categories){
        if(cat.id==code){
          product.push(element)
          break
        }
      }
    }
    return product;
  }

  getCodeById(){
    this.labelCategorie=this.categorieService.getCategorieByIds([this.formVehicule?.value['categorie']])[0].code.toString();
  }


  souscription(){
    let data={
      // "amazoneId":
      "vehicule":{
        "name":this.formVehicule?.value['name'],
        "color":this.formVehicule?.value['couleur'],
        "immatriculation":this.formVehicule?.value['matriculation'],
        "dateMiseCirculation":this.formVehicule?.value['dateMiseCirculation'],
        "nombreSieges":this.formVehicule?.value['nbSieges'],
        "nombrePortes":this.formVehicule?.value['nbPortes'],
        "categorie":this.formVehicule?.value['categorie'],
        "modele":this.formVehicule!.value['nomModel'],
        "valeurVenale":this.formVehicule!.value['valeurVenale'],
        "prixDachat":this.formVehicule!.value['prixDprixDachatachat'],
        "puissance":this.formVehicule!.value['puissance']
      },
      "assuree":{
        "nom":this.formPersonne!.value['name'],
        "adresse":this.formPersonne!.value['adresse'],
        "telephone":this.formPersonne!.value['telephone'],
        "cin":this.formPersonne!.value['cin'],
        "ville":this.formPersonne!.value['city']
      },
      "produitAssure":{
        "id":this.formProduct.value['produitId']
      }
    }
    this.souscriptionService.saveSouscription(data).subscribe((data)=>{
      console.log(data)
    })
    console.log(data)
  }

}
