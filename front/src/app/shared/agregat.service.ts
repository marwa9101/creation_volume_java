import { Injectable } from "@angular/core";
import { IAgregat } from "./agregat.model";

@Injectable()
export class AgregatService {
    agregat: IAgregat = {
        id: 0,
        baieName: "",
        name: "",
        size: "",
        availablesize: "",
        usedSize: ""
    };
    agregats: IAgregat[] = AGREGATS
    baie: string = '';
    constructor(){}
    getAgregat(baieName:string){
        this.baie = baieName
        console.log(baieName)
        //return AGREGATS.find(agregat => agregat.baieName === baieName)
        // for(let i=0; i<AGREGATS.length; i++) {
        //     let agregat = AGREGATS[i]
        //     this.agregat =  agregat
        // } ici chaque nom de baie a un fichier specifique (il faut donner le chemin)
        // pour arriver a l'agregat demandé (je dois lier le back et front pour faire ca)
        // maintenant ca suffit comme ca juste pour le front
        return AGREGATS
    }
}
const AGREGATS: IAgregat[] = [{
    id: 1,
    baieName: "flash001",
    name: "A_001A_FF_01",
    size: "19700",
    availablesize: "19689",
    usedSize: "11"
},
{
    id: 2,
    baieName: "flash002",
    name: "A_001A_FF_02",
    size: "67599",
    availablesize: "13864",
    usedSize: "53735"
},
{
    id: 3,
    baieName: "flash003",
    name: "A_001A_FF_03",
    size: "206026",
    availablesize: "122291",
    usedSize: "83734"
},
{
    id: 4,
    baieName: "flash004",
    name: "A_001B_FF_01",
    size: "19700",
    availablesize: "19688",
    usedSize: "12"
},
{
    id: 5,
    baieName: "flash005",
    name: "A_001B_FF_02",
    size: "206026",
    availablesize: "124389",
    usedSize: "81636"
}
]