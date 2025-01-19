import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/interface/categorie';
import { ProduitAssure } from 'src/app/interface/produit';
import { AuthService } from 'src/app/service/auth.service';

import { LoadingService } from 'src/app/service/loading.service';
import { SouscriptionService } from 'src/app/service/souscription.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

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
  selectClient=false;
  clients=[]
  currentClient:any=null;
  resultCode:any=null;
  resultMessage:any=null
  formProduct:FormGroup=this.fb.group({
    produitId:['',Validators.required]
  })
  labelCategorie:string=""

  produitId:any
  isLoad=false;

  constructor(public fb:FormBuilder,public user:UtilisateurService,public souscriptionService:SouscriptionService,public loading:LoadingService,public authService:AuthService){

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

    console.log(this.user.product)

    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
    })

    this.user.getClient().subscribe(value=>{
      this.clients=value;
    })

  }

  //valider un formulaire et passer au suivant
  nextForm(){
    console.log("suivant")
    if(this.currentForm<3){
      this.currentForm=this.currentForm+1;
    }
  }
  //revenir au formulaire precedent
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
    // let categorie=this.categorieService.getCategorieByIds([code])[0]

    for(let element of this.user.product){
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
    for(let cat of this.user.categorieVoitures){
      if(this.formVehicule!.value['categorie']==cat.id){
        this.labelCategorie=cat.code.toString()
        break;
      }
    }
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
      "assuree": this.selectClient==false? {
        "nom":this.formPersonne!.value['name'],
        "adresse":this.formPersonne!.value['adresse'],
        "telephone":this.formPersonne!.value['telephone'],
        "cin":this.formPersonne!.value['cin'],
        "ville":this.formPersonne!.value['city']
      }:this.currentClient,
      "amazoneId":this.authService.getUserId(),
      "produitAssure":{
        "id":this.formProduct.value['produitId']
      }
    }
    this.souscriptionService.saveSouscription(data).subscribe((data)=>{
      console.log(data)
      this.resultCode=1;
      this.resultMessage="Souscription effectuée avec succès"
      this.currentForm==1;
      setTimeout(() => {
        this.resultCode=null;
        this.resultMessage="";
        this.formPersonne?.reset()
        this.formVehicule?.reset()
        this.formProduct?.reset()

      }, 3000);

    },(e)=>{
      this.resultCode=0;
      this.resultMessage="Erreur lors de la souscription"
      setTimeout(() => {
        this.resultCode=null;
        this.resultMessage="";
        }, 4000);
    })
    console.log(data)
  }


  selectedClient(){
    this.selectClient=!this.selectClient
    this.currentClient=null;
    this.formPersonne?.patchValue(this.currentClient)
    const data={
      "name":"",
      "adresse":"",
      "telephone":"",
      "cin":"",
      "city":""
    }
    this.formPersonne?.patchValue(data)
    console.log("Clients")
    console.log(this.formPersonne?.value)
  }

  selectionnezClient(item:any){
    this.currentClient=item;
    console.log(this.currentClient)
    const data={
      "name":item['nom'],
      "adresse":item['adresse'],
      "telephone":item['telephone'],
      "cin":item['cin'],
      "city":item['ville']

    }
    this.formPersonne?.patchValue(data)
    console.log(this.formPersonne?.value)
    // this.formPersonne!.setValue({
    //   "name":item.name,
    //   "adresse":item.adresse,
    //   "telephone":item.telephone,
    //   "cin":item.cin,
    //   "city":item.city

    // });
  }

}
