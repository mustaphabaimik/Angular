import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { CommandeComponent } from './components/commande/commande.component';





const routes: Routes = [
    
       {path: 'admin' , component:AdminComponent,
       
        
          children:[
              { path: '',component:FournisseurComponent},   
              { path: 'categorie',component:CategorieComponent},
              { path: 'commande',component:CommandeComponent}
                    
          ]
       }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
