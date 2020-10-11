import { Component, OnInit } from '@angular/core';
import { Client } from '../../modules/Client.module';
import { PayserviceService } from '../../services/payservice.service';
import { Pays } from '../../modules/Pays.module';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.css']
})
export class ClientregisterComponent implements OnInit {

  pays :Pays[];
  client=new Client();
  constructor(private paysservice:PayserviceService,private clientservice:ClientService) { 
    this.getpays();
  }

  ngOnInit() {
  }

  addClient(){
    let cli = new Array<String>();
    cli.push(this.client.nom);
    cli.push(this.client.prenom);
    cli.push(this.client.pays);
    cli.push(this.client.adresse);
    cli.push(this.client.codepostal);
    cli.push(this.client.telephone);
    cli.push(this.client.email);
    cli.push(this.client.username);
    cli.push(this.client.password);

    this.clientservice.create(cli)
    .subscribe(response=>{        
        alert('votre compte a bien été crée');
     }) 


  }

  getpays(){
    this.paysservice.getAll()
    .subscribe(response=>this.pays=response);
  }

}
