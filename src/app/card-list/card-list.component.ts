import { Component, OnInit } from '@angular/core';
import { PortfoliumnDataService } from '../portfoliumn-data-service.service';
import { ProjectCard } from '../projectCard';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  offset = 0;
  limit = 24;
  cards = Array<ProjectCard>();
  scrollThrottle = 200;
  scrollDistance = 0;
  constructor(private service: PortfoliumnDataService) {
  }
  ngOnInit() {
    this.getProjectData();
    this.cards = [];
  }
  getProjectData() {
    this.service.getProjectData(this.limit, this.offset).subscribe( projects => {
         this.cards = this.cards.concat(projects);
    });
    this.offset = this.offset + this.limit;
  }
}
