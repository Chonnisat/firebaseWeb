import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  name: string;

  @Output()
  toggle = new EventEmitter();

  showText = false;
  conditionExpression = 'A';
  case1Exp = 'A';

  price = 12300.54768;
  currentDate = new Date();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleShow() {
    this.showText = !this.showText;
    this.toggle.emit(this.showText);
  }

  goToDemo() {
    this.router.navigate(['admin', 'demo']);
  }

}
