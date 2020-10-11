import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarfrn',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   user:string;
  constructor() { }

  ngOnInit() {
    this.user=sessionStorage.getItem('username');
  }

}
