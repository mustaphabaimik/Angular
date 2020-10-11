import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import { Categorie } from 'src/app/admin/modules/Categorie.module';

@Component({
  selector: 'app-vertnav',
  templateUrl: './vertnav.component.html',
  styleUrls: ['./vertnav.component.css']
})
export class VertnavComponent implements OnInit {

  categories:Categorie[];
  categoriess:Categorie[];
  constructor(private categorieservice:CategorieService) { }

  ngOnInit() {
    this.getall();
    console.log("hello");
  }

  getall(){
    this.categorieservice.getAll()
    .subscribe(response=>this.categories=response) 
    this.categorieservice.getAll()
    .subscribe(response=>this.categoriess=response) 
  }

}
