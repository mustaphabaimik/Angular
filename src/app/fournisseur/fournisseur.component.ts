import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  sidebarstatut=false;
  constructor() { }

  ngOnInit() {
  }

  sidebartogle(){
    this.sidebarstatut=!this.sidebarstatut;
  }

}
