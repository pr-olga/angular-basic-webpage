import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobboerseComponent } from './jobboerse.component';

describe('JobboerseComponent', () => {
  let component: JobboerseComponent;
  let fixture: ComponentFixture<JobboerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobboerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobboerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
