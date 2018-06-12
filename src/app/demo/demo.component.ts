import { Component, OnInit } from '@angular/core';
import { Demo } from '../shared/demo/demo';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  _demoObj: Demo;
  _mode: '';
  constructor() { }

  ngOnInit() {
  }

  onToggle(event) {
    this._demoObj = event.demoObj;
    this._mode = event.mode;
  }

}
