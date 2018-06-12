import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Demo } from '../shared/demo/demo';
import { DemoService } from '../shared/demo/demo.service';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  @Input()
  _demoData: Demo;

  @Input()
  _mode: string;

  constructor(
    private demoService: DemoService
  ) { }

  ngOnInit() {
    this._demoData = new Demo();
  }

  onSubmit(demoForm) {
    if (demoForm.valid) {
      if (this._mode === 'Edit') {
        this.demoService.onUpdateDemo(demoForm.value);
        // this.resetData();
      } else {
        this.demoService.onAddDemo(demoForm.value);
        // this.resetData();
      }
    } else {
      alert('Please verify data.');
    }
  }

  resetData() {
    this._demoData = new Demo();
    this._mode = 'Add';
  }

}
