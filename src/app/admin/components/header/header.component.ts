import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toglesidebarforme =new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit() {
  }

  toglesidebar(){
   this.toglesidebarforme.emit();
  }

  logout(){
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.router.navigate(['/adminlog'])
  }

}
