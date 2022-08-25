import { IAgregat } from "./agregat.model";

export interface IVolume{
    volumeType: string;
    svmName: string;
    agregatName: IAgregat;
    volumeName: string;
    volumeSize: number;
    lunName: string;
    lunTaille: number;
    policyExport: string;
}