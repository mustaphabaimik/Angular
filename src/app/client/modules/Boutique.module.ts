import { Fournisseur } from './Fournisseur.module';
import { Categorie } from 'src/app/admin/modules/Categorie.module';


export class Boutique{
    boutique_id:number;
    boutique_nom:string;
    boutique_description:string;
    image_nom:string;
    image_type:string;
    fournisseur:Fournisseur;
    categories:Categorie[];
}