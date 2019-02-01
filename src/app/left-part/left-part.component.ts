import { Component, OnInit } from '@angular/core';

import * as Data from '../../assets/testdata.json';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit {
  data = Data;
  items = [];
  constructor() { }

  ngOnInit() {
    let tmp = [];
    const mapped = Object.keys(this.data).map(key => ({obj: key, value: this.data[key]}));
    for (let item of mapped) {
      this.items.push(item['obj']);
    }
    console.log(mapped);
    console.log(this.items);
  }

}
