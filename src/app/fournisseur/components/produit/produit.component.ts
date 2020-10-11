import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/client/modules/Fournisseur.module';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  fournisseurs:Fournisseur[];
  user:string;
  constructor(private fournisseurservice:FournisseurService) { }

  ngOnInit() {
    this.getall();
    this.user=sessionStorage.getItem('username');
  }

  getall(){
    this.fournisseurservice.getAll()
    .subscribe(response=>this.fournisseurs=response.filter(fo=>fo.username==this.user));

   
  }

}
