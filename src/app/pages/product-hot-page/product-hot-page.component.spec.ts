import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHotPageComponent } from './product-hot-page.component';

describe('ProductHotPageComponent', () => {
  let component: ProductHotPageComponent;
  let fixture: ComponentFixture<ProductHotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
