import { Component, OnInit } from '@angular/core';

import * as example from '../../../assets/db.json';
import moment from "moment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['status', 'name', 'user', 'created_at'];

  public dataSource = [
  ]

  constructor() { 
    console.log(example.documents);
    this.dataSource = example.documents;

  }

  ngOnInit() {
  }

  format(data){
    //return moment(data).format('LL');
    let localLocale = moment(data).locale('es');
    return localLocale.format('LL')
  }

}
