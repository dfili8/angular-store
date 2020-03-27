import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonesPage } from './phones.page';

describe('PhonesPage', () => {
  let component: PhonesPage;
  let fixture: ComponentFixture<PhonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
