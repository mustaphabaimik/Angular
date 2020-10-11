import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/fournisseur/services/produit.service';
import { Produit } from 'src/app/fournisseur/modules/Produit.module';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
  
  produits:Produit[];
  produit:Produit;
  clientusername:string;
  loggedin:boolean=false;
  constructor(private produitservice:ProduitService,private router:Router,private clientservice:ClientService) { }

  ngOnInit() {
    this.getall();
    this.clientusername=sessionStorage.getItem('clientusername');

    this.clientservice.clientmessage$
    .subscribe(message=>{
      this.clientusername=sessionStorage.getItem('clientusername');
      if(this.clientusername==null){
        this.loggedin=false;
      }
      else{
        this.loggedin=true;
      }
    });
  
  }

  getall(){
    this.produitservice.getall()
    .subscribe(response=>this.produits=response);  
  }

  addtocart(p:Produit){
    if(this.clientusername==null){
      this.router.navigate(['/clientlogin'])
    }
    else{
      
      this.clientservice.addtopanier();
      this.clientservice.addproducttocmd(p.reference,this.clientusername)
      .subscribe(response=>{
        alert("votre produit a été ajouté à votre carte")       
      }) 
    
     
    }
   
  }

}
