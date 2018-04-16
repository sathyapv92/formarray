import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiationsComponent } from './valiations.component';

describe('ValiationsComponent', () => {
  let component: ValiationsComponent;
  let fixture: ComponentFixture<ValiationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
