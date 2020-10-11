import { Component, OnInit } from '@angular/core';
import { PayserviceService } from '../../services/payservice.service';
import { Pays } from '../../modules/Pays.module';


import * as $ from 'jquery';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import { Fournisseur } from '../../modules/Fournisseur.module';
import { Boutique } from '../../modules/Boutique.module';
import { Categorie } from '../../../admin/modules/Categorie.module';
import { BoutiqueService } from '../../services/boutique.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-fourniseurregister',
  templateUrl: './fourniseurregister.component.html',
  styleUrls: ['./fourniseurregister.component.css']
})
export class FourniseurregisterComponent implements OnInit {
 
 
  pays :Pays[];
  categories:Categorie[];
  selecteditems:number[];
  selecteditemsname:string[];
  caterror:boolean;
  error:boolean=true;
  tst:boolean=true;
  tstt:boolean=true;
  fournisseur=new Fournisseur;
  boutique=new Boutique;
  boutiques: Boutique[];

  selectedFile: File;
  constructor(private paysservice:PayserviceService,private categorieservice:CategorieService,private boutiqueservice:BoutiqueService,private http:HttpClient,private router:Router) { }

  ngOnInit() {   
    this.getpays(); 
    this.getcategories(); 
    this.selecteditems=new Array<number>();
    this.selecteditemsname=new Array<string>();
    this.caterror=false;
    this.boutiqueservice.getall()
    .subscribe(response=>this.boutiques=response);
    
  }
 

  getpays(){
    this.paysservice.getAll()
    .subscribe(response=>this.pays=response); 
   
  }
  getcategories(){
    this.categorieservice.getAll()
    .subscribe(response=>this.categories=response)    
  }

  

  getid(e:any,id:number,nom:string){
    
    if(e.target.checked){
      
      this.selecteditems.push(id);
      this.selecteditemsname.push(nom);
      
      
    }
    else{
     
      let index=this.selecteditems.indexOf(id);
      let i=this.selecteditemsname.indexOf(nom);
      this.selecteditems.splice(index,1);
      this.selecteditemsname.splice(i,1);
     
    }

    this.caterror=this.selecteditems.length > 0 ? false:true;
    this.error=this.caterror;

  }


  public onFileChanged(event) {  
    this.selectedFile = event.target.files[0];   
  }


  addFournisseurBoutique(){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
    let tab = new Array<String>();
    tab.push(this.boutique.boutique_nom);
    tab.push(this.boutique.boutique_description);

    let frn = new Array<String>();
    frn.push(this.fournisseur.nom);
    frn.push(this.fournisseur.prenom);
    frn.push(this.fournisseur.pays);
    frn.push(this.fournisseur.adresse);
    frn.push(this.fournisseur.codepostal);
    frn.push(this.fournisseur.telephone);
    frn.push(this.fournisseur.email);
    frn.push(this.fournisseur.username);
    frn.push(this.fournisseur.password);

    let cats=new Array<number>();
    let i;
    for(i=0;i<this.selecteditems.length;i++){
      cats.push(this.selecteditems[i]);
    }
   

      this.boutiqueservice.create(uploadImageData,tab,frn,cats)
      .subscribe(response=>{      
        if (response.status === 200) {
          alert('votre compte a bien été crée,Nous allons traiter votre demande dans les plus brefs délais. afin de valider votre compte');
          this.router.navigate(['/login'])
        } else {
           alert('erreur lors de la creation de votre compte');
         }
       }) 


  }


  
 

  


}
