import { Commande } from 'src/app/client/modules/commande.module';

export class Produit{
    reference:string;
    libelle:string;
    description:string;
    prix:number;
    quantite:number;
    pr_image_nom:string;
    pr_image_type:string;
    lcommandes:Commande[];

}