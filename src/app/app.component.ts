import { Component } from '@angular/core';

// import { CardListComponent } from './card-list/card-list.component';

@Component({ // Angular's Comonent Decorator function
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolium Developer Test';
}
