import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/admin/modules/Categorie.module';
import { CategorieService } from 'src/app/admin/services/categorie.service';

@Component({
  selector: 'app-produitparcategorie',
  templateUrl: './produitparcategorie.component.html',
  styleUrls: ['./produitparcategorie.component.css']
})
export class ProduitparcategorieComponent implements OnInit {

  id:number;
  categories:Categorie[];
  constructor(private route:ActivatedRoute,private categorieservice:CategorieService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.categorieservice.getAll()
    .subscribe(response=>{
      this.categories=response.filter(c=>c.catid==this.id);
    
    });
  }

}
