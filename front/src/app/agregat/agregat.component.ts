import { Component, OnInit } from '@angular/core';
import { IAgregat } from '../shared/agregat.model';
import { AgregatService } from '../shared/agregat.service';
import { SvmService } from '../shared/svm-service';


@Component({
  selector: 'app-agregat',
  templateUrl: './agregat.component.html',
  styleUrls: ['./agregat.component.scss']
})
export class AgregatComponent implements OnInit {
  baieName: string = '';
  agregat!: IAgregat;
  agregats: IAgregat[] = [];
  tableEmpty: boolean = true;
  svms: string[] = []; 
  
  constructor(public agregatService: AgregatService, public svmService: SvmService) { }

  ngOnInit(): void {
    
  }
  submitBaieName(formValues: {baieName: string}){
    this.agregatService.getAgregat(formValues.baieName)
    this.agregats = this.agregatService.getAgregat(this.baieName)
    this.svmService.getSvm(formValues.baieName)
    this.svms = this.svmService.getSvm(this.baieName)
    this.tableEmpty = false;
    //this.svm = this.svmService.getSvm(this.svmName)
    //je vais creer une autre formulaire qui demande a l'utilisateur
    //de taper le nom de svm, je prend le nom de svm et je le amene dans 
    //le service svm ou il existe les datas svm
    //route to the component table agregat
  }
 

}
