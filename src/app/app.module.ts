import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { PortfoliumnDataService } from './portfoliumn-data-service.service';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule

  ],
  providers: [PortfoliumnDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
