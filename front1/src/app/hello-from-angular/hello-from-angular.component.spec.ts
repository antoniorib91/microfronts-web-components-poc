import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFromAngularComponent } from './hello-from-angular.component';

describe('HelloFromAngularComponent', () => {
  let component: HelloFromAngularComponent;
  let fixture: ComponentFixture<HelloFromAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloFromAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFromAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
