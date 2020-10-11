import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../modules/Categorie.module';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:string;

  constructor() { }

  ngOnInit() {
    this.user=sessionStorage.getItem('adminusername');
  }

  

}
