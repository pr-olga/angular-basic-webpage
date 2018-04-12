import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BewerbungstippsComponent } from './bewerbungstipps.component';

describe('BewerbungstippsComponent', () => {
  let component: BewerbungstippsComponent;
  let fixture: ComponentFixture<BewerbungstippsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BewerbungstippsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BewerbungstippsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
