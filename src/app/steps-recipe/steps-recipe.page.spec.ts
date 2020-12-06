import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepsRecipePage } from './steps-recipe.page';

describe('StepsRecipePage', () => {
  let component: StepsRecipePage;
  let fixture: ComponentFixture<StepsRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsRecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
