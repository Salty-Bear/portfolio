import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudspaceComponent } from './cloudspace.component';

describe('CloudspaceComponent', () => {
  let component: CloudspaceComponent;
  let fixture: ComponentFixture<CloudspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
