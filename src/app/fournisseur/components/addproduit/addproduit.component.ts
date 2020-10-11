import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import { Categorie } from 'src/app/admin/modules/Categorie.module';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { Fournisseur } from 'src/app/client/modules/Fournisseur.module';
import { Produit } from '../../modules/Produit.module';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  categories:Categorie[];
  fournisseurs:Fournisseur[];
  fournisseur:Fournisseur;
  user:string;
  selectedFile: File;
  selectedcat:number;
 
  produit=new Produit();
  constructor(private categorieservice:CategorieService,private fournisseurservice:FournisseurService,private produitservice:ProduitService) { }

  ngOnInit() {
    this.getall();
    this.user=sessionStorage.getItem('username');

    
  }

  getall(){
    this.categorieservice.getAll()
    .subscribe(response=>this.categories=response); 

    this.fournisseurservice.getAll()
    .subscribe(response=>
      this.fournisseurs=response.filter(f=>f.username.includes(this.user))); 
  }

  public onFileChanged(event) {
      this.selectedFile = event.target.files[0];

     
     
  }

  ajouterproduit(){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    let tab = new Array<String>();

    let fourniss:string;
    tab.push(this.produit.reference);
    tab.push(this.produit.libelle);
    tab.push(this.produit.description);
    tab.push(this.produit.prix.toString());
    tab.push(this.produit.quantite.toString());
    
    
    fourniss=this.user;

    //alert(fourniss + " " + this.selectedcat + " " + tab[3] + " " +tab[4]);

    this.produitservice.create(uploadImageData,tab,fourniss,this.selectedcat)
    .subscribe(response=>{      
      if (response.status === 200) {
        alert('votre produit a ete bien enregistré');
      } else {
         alert('erreur lors de lenregistrement de votre produit');
       }
     }) 

  }


  
  
  

}
