import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupforstudentComponent } from './groupforstudent.component';

describe('GroupforstudentComponent', () => {
  let component: GroupforstudentComponent;
  let fixture: ComponentFixture<GroupforstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupforstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupforstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
