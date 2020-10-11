import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FournisseurComponent } from './fournisseur.component';
import { FournisseurRoutingModule } from './fournisseur.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; 
import { HighchartsChartModule } from 'highcharts-angular';
import { MatSidenavModule,MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { ProduitService } from './services/produit.service';
import { CommandeComponent } from './components/commande/commande.component';


@NgModule({
  declarations: [
    FournisseurComponent,
    HeaderComponent,
    SidebarComponent,
    ProduitComponent,
    AddproduitComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FournisseurRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    HighchartsChartModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule
  ],
  providers: [ProduitService],
  bootstrap: [FournisseurComponent]
})
export class FournisseurModule { }
