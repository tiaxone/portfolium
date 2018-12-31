import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardListComponent,
        CardComponent
       ],
      imports: [
        MatProgressSpinnerModule,
        InfiniteScrollModule,
        MatCardModule,
        FlexLayoutModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
