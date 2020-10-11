import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../services/fournisseur.service';
import { Fournisseur } from 'src/app/client/modules/Fournisseur.module';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseurs:Fournisseur[];
  fournisseur:Fournisseur;

  tag:boolean=true;
  etatcomptemodifiable:boolean=false;
  constructor(private fournisseurservice:FournisseurService) { }

  ngOnInit() {
    this.getall();
  }


  getall(){
    this.fournisseurservice.getAll()
    .subscribe(response=>this.fournisseurs=response);   
  }


  editer(item){
   
    this.tag=!this.tag;
    this.fournisseur=item;

    if(item.etat_compte=="nonvalide"){
      this.etatcomptemodifiable=true;
    }
       
  }

  retour(){
   
    this.tag=!this.tag;
    this.etatcomptemodifiable=false;
  }
 

  valider(id){

    this.fournisseurservice.validercompte(id)
    .subscribe(response=>{
      this.tag=true;
      this.fournisseur=new Fournisseur();
      this.getall();
      alert("le compte a été bien activé")       
    })
 
  }

}
