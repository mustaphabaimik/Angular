import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Commande } from '../../modules/commande.module';
import { Client } from '../../modules/Client.module';
import { ProduitService } from 'src/app/fournisseur/services/produit.service';
import { Produit } from 'src/app/fournisseur/modules/Produit.module';
import { CommandeService } from 'src/app/admin/services/commande.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  commandes:Commande[];
  clients:Client[];
  clientusername:string;
  nbr:number;
  produits:Produit[];
  selectedproduits=new Array<Produit>();
  total:number;
  constructor(private clientservice:ClientService,private produitservice:ProduitService,private commandeservice:CommandeService) { }

  ngOnInit() {
    this.getall();
    this.clientusername=sessionStorage.getItem("clientusername");
  }

  getall(){
    let index=0;
    this.total=0;
    this.clientservice.getall()
    .subscribe(response=>{
      this.clients=response.filter(cl=>cl.username==this.clientusername);
      this.nbr=this.clients[0].commands.length;
      this.produitservice.getall()
      .subscribe(response=>{
        this.produits=response;
       
        for(let i=0;i<this.clients[0].commands.length;i++){
            if(this.clients[0].commands[i].status=="nonvalide"){
                for(let j=0;j<this.clients[0].commands[i].lcommandes.length;j++){
                  for(let k=0;k<this.produits.length;k++){
                       if(this.clients[0].commands[i].lcommandes[j].id.produit_id==this.produits[k].reference){
                           
                            this.selectedproduits.push(this.produits[k]);
                            this.total+=this.produits[k].prix*this.clients[0].commands[i].lcommandes[j].quantite;
                           
                      }          
                  }               
                }
            }             
        }
            
      });
    });
  }


  


  confirmerAchat(){
    let cmds=new Array<number>();
    for(let i=0;i<this.clients[0].commands.length;i++){
      if(this.clients[0].commands[i].status=="nonvalide"){
           cmds.push(this.clients[0].commands[i].idcmd);
      }
    }


    this.clientservice.confirmerAchat(cmds)
      .subscribe(response=>{      
      
          alert("votre commande a été bien enregistré vous allez recevoir votre commande dans l'dresse que vous avez specifié lors de l'inscription");
          
       
       }) 
   }

   //modifier qte
    onChange($event,p:Produit){
       
        let idcmd:number=0;
        let index=-1;
        for(let i=0;i<this.clients[0].commands.length;i++){
          if(this.clients[0].commands[i].status=="nonvalide"){
              idcmd=this.clients[0].commands[i].idcmd;
              index=i;
          }
        }

        this.commandeservice.updateqte(idcmd,p.reference,$event.target.value)
        .subscribe(response=>{    
         
          let pos=this.selectedproduits.indexOf(p);
          for(let i=0;i<this.clients[0].commands[index].lcommandes.length;i++){
                 if(this.selectedproduits[pos].reference==this.clients[0].commands[index].lcommandes[i].id.produit_id){
                  this.clients[0].commands[index].lcommandes[i].quantite=$event.target.value;
                 }
          }
            this.gettotal();
        }) ;



      
    }

    getqte(p:Produit){      
      let index=-1;
      for(let i=0;i<this.clients[0].commands.length;i++){
        if(this.clients[0].commands[i].status=="nonvalide"){
            for(let j=0;j<this.clients[0].commands[i].lcommandes.length;j++){
              if(this.clients[0].commands[i].lcommandes[j].id.produit_id==p.reference){
                return this.clients[0].commands[i].lcommandes[j].quantite;
              }
            }
        }
      }
      return 1;
    }

   updatecart(p:Produit){
   
        let idcmd:number=0;
       
        for(let i=0;i<this.clients[0].commands.length;i++){
          if(this.clients[0].commands[i].status=="nonvalide"){
              idcmd=this.clients[0].commands[i].idcmd;
              
          }
        }
        this.commandeservice.updatecart(idcmd,p.reference)
        .subscribe(response=>{        
            let index=this.selectedproduits.indexOf(p);
            this.selectedproduits.splice(index,1);      
            this.gettotal();  
            this.clientservice.deletefrompanier();
            alert("votre produit a été bien supprimé")     
        }) ;


   }


   gettotal(){
        this.total=0;
        for(let i=0;i<this.clients[0].commands.length;i++){
          if(this.clients[0].commands[i].status=="nonvalide"){
              for(let j=0;j<this.clients[0].commands[i].lcommandes.length;j++){
                for(let k=0;k<this.selectedproduits.length;k++){
                    if(this.clients[0].commands[i].lcommandes[j].id.produit_id==this.selectedproduits[k].reference){
                          this.total+=this.selectedproduits[k].prix*this.clients[0].commands[i].lcommandes[j].quantite;
                        
                    }          
                }               
              }
          }             
      }
   }


 

}
