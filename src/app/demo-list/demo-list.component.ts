import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DemoService } from '../shared/demo/demo.service';
import { Demo } from '../shared/demo/demo';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {


  @Output()
  toggle = new EventEmitter();

  constructor(
    private demoService: DemoService
  ) { }

  ngOnInit() {

  }

  get _demoList(): any {
    // return this.demoService.onLoadData().subscribe();
    return this.demoService.onLoadData();
  }

  onAddbtnClick() {
    this.toggle.emit({mode: 'Add', demoObj: { 'code': '', 'name': ''}});
  }

  onEditbtnClick(item) {
    this.toggle.emit({mode: 'Edit', demoObj: { 'code': item.code, 'name': item.name}});
  }

  onDelbtnClick(idx) {
    this.demoService.onDeleteDemo(idx);
  }

}
