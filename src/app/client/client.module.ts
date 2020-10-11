import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientRoutingModule } from './client.routing';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Section1Component } from './components/section1/section1.component';
import { ShopComponent } from './components/shop/shop.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailproduitComponent } from './components/detailproduit/detailproduit.component';
import { VertnavComponent } from './components/vertnav/vertnav.component';
import { FourniseurloginComponent } from './components/fourniseurlogin/fourniseurlogin.component';
import { FourniseurregisterComponent } from './components/fourniseurregister/fourniseurregister.component';
import { BoutiqueService } from './services/boutique.service';
import { PayserviceService } from './services/payservice.service';
import { ClientloginComponent } from './components/clientlogin/clientlogin.component';
import { ClientregisterComponent } from './components/clientregister/clientregister.component';
import { ClientService } from './services/client.service';
import { ProduitparboutiqueComponent } from './components/produitparboutique/produitparboutique.component';
import { BoutiqueshopComponent } from './components/boutiqueshop/boutiqueshop.component';
import { ProduitparcategorieComponent } from './components/produitparcategorie/produitparcategorie.component';

@NgModule({
  declarations: [
     ClientComponent,
     NavbarComponent,
     HeaderComponent,
     AccueilComponent,
     Section1Component,
     ShopComponent,
     FooterComponent,
     ContactComponent,
     AboutComponent,
     CartComponent,
     DetailproduitComponent,
     VertnavComponent,
     FourniseurloginComponent,
     FourniseurregisterComponent,
     ClientloginComponent,
     ClientregisterComponent,
     ProduitparboutiqueComponent,
     BoutiqueshopComponent,
     ProduitparcategorieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClientRoutingModule
  ],
  providers: [BoutiqueService,PayserviceService,ClientService],
  bootstrap: [ClientComponent]
})
export class ClientModule { }
