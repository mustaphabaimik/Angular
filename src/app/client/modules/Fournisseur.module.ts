import { Boutique } from './Boutique.module';
import { Produit } from 'src/app/fournisseur/modules/Produit.module';

export class Fournisseur{
    user_id:number;
    nom:string;
    prenom:string;
    pays:string;
    adresse:string;
    codepostal:string;
    telephone:string;
    role:string;
    email:string;
    username:string;
    password:string;
    etat_compte:string;
    boutique:Boutique;
    produits:Produit[];
}