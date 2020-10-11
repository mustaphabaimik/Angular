import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailproduitComponent } from './components/detailproduit/detailproduit.component';
import { FourniseurloginComponent } from './components/fourniseurlogin/fourniseurlogin.component';
import { FourniseurregisterComponent } from './components/fourniseurregister/fourniseurregister.component';
import { ClientloginComponent } from './components/clientlogin/clientlogin.component';
import { ClientregisterComponent } from './components/clientregister/clientregister.component';
import { ProduitparboutiqueComponent } from './components/produitparboutique/produitparboutique.component';
import { ProduitparcategorieComponent } from './components/produitparcategorie/produitparcategorie.component';



const routes: Routes = [
    
       {path: '' , component:ClientComponent  ,
       
         
          
          children:[
            { path: '',component:AccueilComponent},
            { path: 'shop',component:ShopComponent},  
            { path: 'contact',component:ContactComponent},
            { path: 'about',component:AboutComponent},
            { path: 'cart',component:CartComponent},
            { path: 'produitdetail',component:DetailproduitComponent},
            { path: 'login',component:FourniseurloginComponent},           
            { path: 'register',component:FourniseurregisterComponent},           
            { path: 'clientlogin',component:ClientloginComponent},           
            { path: 'clientregister',component:ClientregisterComponent},
            { path: 'detailboutique/:id',component:ProduitparboutiqueComponent},
            { path: 'detailcategorie/:id',component:ProduitparcategorieComponent}           
          ]
        }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
