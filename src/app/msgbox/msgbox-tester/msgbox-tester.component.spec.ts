import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgboxTesterComponent } from './msgbox-tester.component';

describe('MsgboxTesterComponent', () => {
  let component: MsgboxTesterComponent;
  let fixture: ComponentFixture<MsgboxTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgboxTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgboxTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
