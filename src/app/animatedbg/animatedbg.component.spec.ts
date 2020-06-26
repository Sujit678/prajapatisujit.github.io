import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedbgComponent } from './animatedbg.component';

describe('AnimatedbgComponent', () => {
  let component: AnimatedbgComponent;
  let fixture: ComponentFixture<AnimatedbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
