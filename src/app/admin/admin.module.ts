import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminRoutingModule } from './admin.routing';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule,MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './charts/area/area.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { MatTableModule } from '@angular/material/table'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategorieService } from './services/categorie.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FournisseurService } from './services/fournisseur.service';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { CommandeComponent } from './components/commande/commande.component';
import { CommandeService } from './services/commande.service';



@NgModule({
  declarations: [
    
    AdminComponent,
    
    NavbarComponent,
    
    HeaderComponent,
    
    FooterComponent,
    
    SidebarComponent,
    
    AreaComponent,
    
    CategorieComponent,
    
    FournisseurComponent,
    
    CommandeComponent,
    
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  providers: [CategorieService,FournisseurService,CommandeService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
