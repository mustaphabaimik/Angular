import { Produit } from 'src/app/fournisseur/modules/Produit.module';

export class Categorie{
    catid:number;
    catnom:string;
    parentcategorie:Categorie;
    souscat:Categorie[];
    produits:Produit[];
}