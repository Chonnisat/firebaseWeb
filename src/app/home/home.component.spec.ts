import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TestPipe } from '../test.pipe';
import { FormsModule } from '@angular/forms'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, TestPipe ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show item when toggle', () =>{
    expect(component.showText).toBeFalsy('showTest = false')
    component.toggleShow();
    expect(component.showText).toBeTruthy('showTest = true')
  })

  it('show div when toggle', () => {
    component.showText = true;
    component.name = 'Jame';
    fixture.detectChanges();
    const p: HTMLElement = fixture.nativeElement.querySelector('#showText')
    expect(p.textContent).toMatch(/Jame/i, 'show jame')
  })
});
