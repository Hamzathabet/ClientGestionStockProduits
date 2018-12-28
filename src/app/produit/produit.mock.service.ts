import { Produit } from "../shared/produit";
import { Injectable } from "@angular/core";

@Injectable()
export class ProduitMockService{

    private PRODUITS: Produit[] = [];

    constructor(){
        let p1: Produit = new Produit('l',1,2);
        let p2: Produit = new Produit('b',2,32);
        let p3: Produit = new Produit('c',45,4);
        this.PRODUITS.push(p1);
        this. PRODUITS.push(p2);
        this. PRODUITS.push(p3);
    }
    public getProduits():Produit[]
    {
        return this.PRODUITS;
    }
}