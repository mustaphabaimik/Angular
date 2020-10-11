import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { Fournisseur } from '../../modules/Fournisseur.module';
import { BoutiqueService } from '../../services/boutique.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  fournisseurs:Fournisseur[];
  constructor(private fournisseurservice:FournisseurService) { }

  ngOnInit() {
    this.getall();
  }

  getall(){
    this.fournisseurservice.getAll()
    .subscribe(response=>this.fournisseurs=response);
  }

  produitparboutique(fournisseur:Fournisseur){
    alert(fournisseur.username);
  }

}
