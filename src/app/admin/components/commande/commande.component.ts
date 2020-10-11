import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { Commande } from 'src/app/client/modules/commande.module';
import { ProduitService } from 'src/app/fournisseur/services/produit.service';
import { Produit } from 'src/app/fournisseur/modules/Produit.module';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes:Commande[];
  produits:Produit[];
  tag:boolean=false;
  seelctedproduits;
  constructor(private commandeservice:CommandeService,private produitservice:ProduitService) { }

  ngOnInit() {
    this.getall();
  }

  getall(){
    this.commandeservice.getAll()
    .subscribe(response=>this.commandes=response);
    this.produitservice.getall()
    .subscribe(response=>this.produits=response);
  }

  editercmd(item:Commande){
      this.seelctedproduits=new Array<Produit>();
      let p=new Array<Produit>();
      this.tag=!this.tag;
      for(let i=0;i<item.lcommandes.length;i++){
        for(let j=0;j<this.produits.length;j++){
          if(item.lcommandes[i].id.produit_id==this.produits[j].reference){
                this.seelctedproduits.push(this.produits[j]);
          }
        }    
      }
      
  }

}
