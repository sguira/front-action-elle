import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProduitAssure } from 'src/app/interface/produit';
import { CategorieService } from 'src/app/service/categorie.service';
import { LoadingService } from 'src/app/service/loading.service';
import { SimulationService } from 'src/app/service/simulation.service';

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
  isLoad:boolean=false;


  constructor(public categorie:CategorieService,public simulation:SimulationService,public loading:LoadingService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.simulationForm = new FormGroup({
      garantie: new FormControl('', Validators.required),
      puissance:new FormControl('',Validators.required),
      product:new FormControl('',Validators.required),
      dateCirculation:new FormControl('',Validators.required),
      valeurVenale: new FormControl('',Validators.required),
      categorie:new FormControl('',Validators.required)
    })

    this.loading.$progress.subscribe(value=>{
      this.isLoad=value;
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
    console.log("test")
    console.log(this.getProduit(this.simulationForm?.value['product']))
    console.log(this.getProduit(this.simulationForm?.value['category']))
    console.log(this.simulationForm!.value)

    let data={
      'miseCirculation':this.simulationForm!.value['dateCirculation'],
      'produitAssure':this.getProduit(this.simulationForm!.value['product']),
      'valeurVenale':this.simulationForm!.value['valeurVenale'],
      'puissance':this.simulationForm!.value['puissance']
    }
    console.log(data)
    this.simulation.makeSimulation(data).subscribe((e)=>{
      console.log(e)
      this.showResult=true;
      this.result=e;
    })



  }

  //recupération de produit à partir de l'id
  getProduit(id:string):ProduitAssure|null{
    for(let value of this.categorie.product){
      if(value.id==id){
        return value;
      }
    }
    return null;
  }

  //recuperation de la categorie
  getCategorie(id:string){
    for(let value of this.categorie.categorieVoitures){
      if(value.id==id){
        return value;
      }
    }
    return null;
  }

  reset(){
    this.simulationForm!.reset();
  }

}
