import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigParentComponent } from './config-parent.component';

describe('ConfigParentComponent', () => {
  let component: ConfigParentComponent;
  let fixture: ComponentFixture<ConfigParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
