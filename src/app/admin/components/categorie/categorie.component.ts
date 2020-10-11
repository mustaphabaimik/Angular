import { Component, OnInit } from '@angular/core';

import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../modules/Categorie.module';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
 
  categories:Categorie[];
  filterlistcat:Categorie[];
  cat=new Categorie();
  souscat=new Categorie();
  catpar:number;
  flg:boolean=true;
  test:boolean=true;
  p:number=1;

  constructor(private categorieservice:CategorieService) { }

  ngOnInit() {
    this.getall();
    
    
  }

  getall(){
    this.categorieservice.getAll()
    .subscribe(response=>this.categories=response); 
    this.categorieservice.getAll()
    .subscribe(response=>this.filterlistcat=response); 
   
  }

  addcategorie(){        
        this.categorieservice.create(this.cat)
          .subscribe(response=>{      
            this.getall();
            this.cat=new Categorie();  
            alert('votre categorie a été bien ajouté'); 
        })  
          
  }

  addsouscategorie(){
      this.categorieservice.createsouscat(this.souscat,this.catpar)
      .subscribe(response=>{      
        this.getall();
        this.cat=new Categorie();  
        alert('votre categorie a été bien ajouté'); 
    })  
  }

  editcat(cat){
    if(cat.parentcategorie==null){
    this.cat=cat;
    this.test=false;
    }
    else{
      this.souscat=cat;
      this.flg=false;
      this.catpar=this.souscat.parentcategorie.catid;
    }
  }
  editsouscat(cat){
    this.souscat=cat;
    this.flg=false;
  }

  updatecategorie(){
    this.categorieservice.update(this.cat)
    .subscribe(response=>{
      this.test=true;
      this.cat=new Categorie();
      alert("votre categorie a été bien modifié")       
    }) 
  }

  updatesouscategorie(){
    
    this.categorieservice.updatesouscat(this.souscat,this.catpar)
    .subscribe(response=>{
      this.flg=true;
      this.souscat=new Categorie();
      this.getall();
      alert("votre categorie a été bien modifié")       
    }) 
  }
  annuler(){
    this.test=true;
    this.cat=new Categorie();
  }

  annuleruodate(){
    this.flg=true;
    this.souscat=new Categorie();
  }

  delete(cat){
        let valid:boolean=true;
        let i=0;
        for(i=0;i<this.categories.length;i++){
          
          if(this.categories[i].parentcategorie!=null && this.categories[i].parentcategorie.catid==cat.catid){
              valid=false;        
          }
        }
       
        if(valid==true){
          this.categorieservice.delete(cat)
          .subscribe(response=>{      
           this.getall();
            alert('votre categorie a été bien supprimé'); 
          })
        }
        else{
          alert("imposible de supprimé cette categorie parce qu'\elle contient d\'autres categories" ); 
        }
        
  }
 
  chercher(req:string){
    this.filterlistcat=(req)?this.categories.filter(cc=>cc.catnom.toLowerCase().includes(req.toLowerCase())) : this.categories;    
  }
 

  

}
