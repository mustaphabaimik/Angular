import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurComponent } from './fournisseur.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { CommandeComponent } from './components/commande/commande.component';








const routes: Routes = [
    
       {path: 'fournisseur' , component:FournisseurComponent,
       
        
          children:[
              { path: '',component:ProduitComponent},  
              { path: 'nouveauproduit',component:AddproduitComponent},
              { path: 'commande',component:CommandeComponent}
              
             
                         
          ]
       }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
