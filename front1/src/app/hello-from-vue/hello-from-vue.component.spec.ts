import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFromVueComponent } from './hello-from-vue.component';

describe('HelloFromVueComponent', () => {
  let component: HelloFromVueComponent;
  let fixture: ComponentFixture<HelloFromVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloFromVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFromVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
