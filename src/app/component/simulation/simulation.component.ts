import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProduitAssure } from 'src/app/interface/produit';

import { LoadingService } from 'src/app/service/loading.service';
import { SimulationService } from 'src/app/service/simulation.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent {

  garantieSelected:string[]=[]


  simulationForm?:FormGroup
  showResult:boolean=false;
  result:any

  showAlert=false;

  constructor(public simulation:SimulationService,public userService:UtilisateurService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.simulationForm = new FormGroup({
      // garantie: new FormControl('', Validators.required),
      puissance:new FormControl('',Validators.required),
      product:new FormControl('',Validators.required),
      dateCirculation:new FormControl('',Validators.required),
      valeurVenale: new FormControl('',Validators.required),
      categorie:new FormControl('',Validators.required)
    })


  }

  //méthode pour ajouter ou extrait un identifiant de la liste des élément sélectionnez
  selectElement(id:string){
    console.log(this.garantieSelected)
    if(this.garantieSelected.includes(id)){
      this.garantieSelected.splice(this.garantieSelected.indexOf(id),1)
    }
    else{
      this.garantieSelected.push(id)
    }

  }

  //pour verifier si un identifiant existe
  isIn(id:string){
    return this.garantieSelected.includes(id)
  }


  //méthode pour faire la simulation de dévis
  onSimulate(){
    if(this.simulationForm?.valid==false)
      return ;
    console.log("test")
    console.log(this.getProduit(this.simulationForm?.value['product']))
    console.log(this.getProduit(this.simulationForm?.value['category']))
    console.log(this.simulationForm!.value)

    let data={
      'miseCirculation':this.simulationForm!.value['dateCirculation'],
      'produitAssure':this.getProduit(this.simulationForm!.value['product']),
      'valeurVenale':this.simulationForm!.value['valeurVenale'],
      'puissance':this.simulationForm!.value['puissance'],
      "categorie":{
        "id":this.simulationForm!.value['categorie'],
      }
    }
    console.log(data)
    this.simulation.makeSimulation(data).subscribe((e)=>{
      console.log(e)
      this.showResult=true;
      this.result=e;
    },(e)=>{
      console.log(e)
      this.showAlert=true;
      setTimeout(()=>{
        this.showAlert=false;
      },4000)
    })



  }

  //recupération de produit à partir de l'id
  getProduit(id:string):ProduitAssure|null{
    for(let value of this.userService.product){
      if(value.id==id){
        return value;
      }
    }
    return null;
  }

  //recuperation de la categorie
  getCategorie(id:string){
    for(let value of this.userService.categorieVoitures){
      if(value.id==id){
        return value;
      }
    }
    return null;
  }

  //retourne la liste des produit eligible pour une categorie de véhicule
  getProduitEligible(categorieId: string) {
    let produits:ProduitAssure[]=[]
    for(let value of this.userService.product){
      for(let categorie of value.categories){
        if(categorieId==categorie.id){
          produits.push(value);
        }
      }
    }
    return produits
  }

  reset(){
    this.simulationForm!.reset();
  }

}
