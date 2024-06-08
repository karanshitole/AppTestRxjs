import { Component, OnInit, inject } from '@angular/core';
import { Istd } from '../../models/students.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdsInfo  : Array<Istd>=[]
  constructor() { }
 private _stdService = inject(StudentsService)
  ngOnInit(): void {
    this.stdsInfo = this._stdService.fetchAllStudent()
  }
  onEdit(std : Istd){
    this._stdService.stdSub$.next(std)
  }
  onDelete(id:Istd){
    this._stdService.DeleteStd(id)
  }
}
