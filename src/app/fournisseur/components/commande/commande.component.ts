import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/client/modules/commande.module';
import { Produit } from '../../modules/Produit.module';
import { CommandeService } from 'src/app/admin/services/commande.service';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { Fournisseur } from 'src/app/client/modules/Fournisseur.module';

import { ClientService } from 'src/app/client/services/client.service';
import { Client } from 'src/app/client/modules/Client.module';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  
  commandes:Commande[];
  produits=new Array<Produit>();
  tag:boolean=false;
  fournisseurs;
  clients:Client[];
  seelctedcommande=new Commande;
  selectedproduits=new Array<Produit>();
  selectedcommandes=new Array<Commande>();
  selectproduitsbyfournisseur=new Array<Produit>();
  user:string;
  Client=new Client();
  produitparfournisseur=new Array<Produit>();
  produitparcmd;
 
  constructor(private commandeservice:CommandeService,private fournisseurservice:FournisseurService,private clientservice:ClientService,private produitservice:ProduitService) { }

  ngOnInit() {
    this.getall();
    this.user=sessionStorage.getItem('username');
  }

   getall(){
    this.fournisseurs=new Array<Fournisseur>();
    this.produitparcmd=new Array<Produit>();
          this.commandeservice.getAll()
          .subscribe(response=>{
            this.commandes=response;
            this.fournisseurservice.getAll()
            .subscribe(response=>{
              this.fournisseurs=response.filter(fo=>fo.username==this.user)
              this.selectproduitsbyfournisseur=this.fournisseurs[0].produits;    
              
              
              for(let i=0;i<this.commandes.length;i++){
                   for(let j=0;j<this.commandes[i].lcommandes.length;j++){
                     for(let k=0;k<this.selectproduitsbyfournisseur.length;k++){
                         if(this.selectproduitsbyfournisseur[k].reference==this.commandes[i].lcommandes[j].id.produit_id){
                           this.selectedcommandes.push(this.commandes[i]);
                         }
                     }
                   }
              }

              for(let i=0;i<this.selectedcommandes.length;i++){
                for(let j=i+1;j<this.selectedcommandes.length;j++){
                  if(this.selectedcommandes[i].idcmd==this.selectedcommandes[j].idcmd){
                    this.selectedcommandes.splice(j,1);
                  }
                }
              }
              
            });           
          });
        

         

          this.clientservice.getall()
          .subscribe(response=>this.clients=response);

          this.produitservice.getall()
          .subscribe(response=>this.produits=response);
   }

   editercmd(cmd:Commande){
    
            for(let i=0;i<this.clients.length;i++){
              for(let j=0;j<this.clients[i].commands.length;j++){
                if(this.clients[i].commands[j].idcmd==cmd.idcmd){
                  this.Client=this.clients[i];
                }
              }
            }

            this.seelctedcommande=cmd;

            

            
            for(let i=0;i<this.seelctedcommande.lcommandes.length;i++){
              for(let j=0;j<this.produits.length;j++){
                if(this.seelctedcommande.lcommandes[i].id.produit_id==this.produits[j].reference){
                      this.selectedproduits.push(this.produits[j]);
                }
              }
            }
              
            
       
             
           this.produitparcmd=new Array<Produit>();
              for(let i=0;i<this.selectedproduits.length;i++){
                for(let j=0;j<this.fournisseurs[0].produits.length;j++){
                  if(this.selectedproduits[i].reference==this.fournisseurs[0].produits[j].reference){
                        this.produitparcmd.push(this.selectedproduits[i]);
                       
                  }
                }
              }
             
          
    this.tag=!this.tag;
   
  }

  getstatut(id:number){
    let statut:string="";
    for(let i=0;i<this.commandes.length;i++){
      if(this.commandes[i].idcmd==id){
        statut=this.commandes[i].status;
      }
    }
    return statut;
  }

  getqte(reference:string){
    let qte:Number;
      for(let i=0;i<this.seelctedcommande.lcommandes.length;i++){ 
        if(this.seelctedcommande.lcommandes[i].id.produit_id==reference){
              qte=this.seelctedcommande.lcommandes[i].quantite;
        }    
      }

      return qte;
  }

  gettotal(){
    let total:number=0;
    for(let i=0;i<this.seelctedcommande.lcommandes.length;i++){
      let qte:number;
        for(let j=0;j<this.selectproduitsbyfournisseur.length;j++){
            if(this.selectproduitsbyfournisseur[j].reference==this.seelctedcommande.lcommandes[i].id.produit_id){
                  total=total+(this.seelctedcommande.lcommandes[i].quantite*this.selectproduitsbyfournisseur[j].prix);
            }
        }
    }
    return total;
  }

  retour(){
       this.tag=!this.tag;
  }

  

}
