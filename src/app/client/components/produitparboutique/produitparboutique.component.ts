import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { Fournisseur } from '../../modules/Fournisseur.module';


@Component({
  selector: 'app-produitparboutique',
  templateUrl: './produitparboutique.component.html',
  styleUrls: ['./produitparboutique.component.css']
})
export class ProduitparboutiqueComponent implements OnInit {

  id:number;
  fournisseurs:Fournisseur[];
  constructor(private route:ActivatedRoute,private fournisseurservice:FournisseurService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.fournisseurservice.getAll()
    .subscribe(response=>{
      this.fournisseurs=response.filter(fo=>fo.user_id==this.id);
      
    });

    
  }

}
