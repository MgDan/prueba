import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndxComponent } from './indx.component';

describe('IndxComponent', () => {
  let component: IndxComponent;
  let fixture: ComponentFixture<IndxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
