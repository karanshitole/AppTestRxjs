import { Injectable, inject } from '@angular/core';
import { Istd } from '../models/students.interface';
import { Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private _sanckBarService = inject(SnackbarService)
  constructor() { }
stdSub$ : Subject<Istd>=new Subject<Istd>()
  stdsArr : Array<Istd>=[
    {
      fname :"karan",
      lname : "shitole",
      email : "shitolekaran11@gmail.com",
      contact:"9049826265",
      stdId :'123'
    },
    {
      fname :"Aaru",
      lname : "shitole",
      email : "shitolearru09@gmail.com",
      contact:"9049826265",
      stdId :'115'
    }

 ]
  fetchAllStudent():Array<Istd>{
    return this.stdsArr;
  }
  addStd(std :Istd){
    this.stdsArr.unshift(std)
    
  }
  updateStd(updatedStd: Istd){
    let getIndex = this.stdsArr.findIndex(std => std.stdId === updatedStd.stdId);
    this.stdsArr[getIndex]=updatedStd;
    this._sanckBarService.opensnackbar(`The ${updatedStd.fname} is updated Successfully`)
  }
  DeleteStd(DeleteObj : Istd){
    let getIndex = this.stdsArr.findIndex(std => std.stdId ===DeleteObj.stdId);
    this.stdsArr.splice(getIndex,1)
    this._sanckBarService.opensnackbar(`The ${DeleteObj.fname} is Deleted Successfully`)

}
}