import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFromReactComponent } from './hello-from-react.component';

describe('HelloFromReactComponent', () => {
  let component: HelloFromReactComponent;
  let fixture: ComponentFixture<HelloFromReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloFromReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFromReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
