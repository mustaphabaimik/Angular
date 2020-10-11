import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerfrn',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toglesidebarforme =new EventEmitter();
  constructor(private route:Router) { }

  ngOnInit() {
  }

  toglesidebar(){
    this.toglesidebarforme.emit();
   }

   logout(){
   
    sessionStorage.clear();
    this.route.navigate(['/login'])
   }

}
