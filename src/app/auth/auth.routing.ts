import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';





const routes: Routes = [
    
       {path: 'adminlog' , component:AuthComponent,
       
        
          children:[
              { path: '',component:LoginComponent}              
          ]
       }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
