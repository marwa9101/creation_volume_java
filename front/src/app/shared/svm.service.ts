import { Injectable } from "@angular/core";

@Injectable()
export class SvmService {
    svms: string[] = SVMS
    baie: string = '';
    constructor(){}
    getSvm(baieName:string){
        this.baie = baieName
        console.log(this.baie)
        return SVMS
    }
}
const SVMS = [
    'PRDSAES002',
    'PRDSBDD002', 
    'PRDSCLD002', 
    'SAN002A', 
    'SAN002B',  
    'VS_CLD_VMW_01R', 
    'VS_GFI_SAN_11', 
    'VS_GFI_VMW_11', 
    'VS_GFI_VMW_12' 
]