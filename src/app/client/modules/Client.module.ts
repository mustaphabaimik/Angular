import { Commande } from './commande.module';

export class Client{
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
    commands:Commande[];
}