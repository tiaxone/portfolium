import { Component, OnInit, Input } from '@angular/core';
import { ProjectCard } from '../projectCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() projectCard: ProjectCard;
  title: string;
  description: string;
  coverImage: string;
  avatar: string;
  username: string;
  ngOnInit() {
    this.title = this.projectCard.title ? this.projectCard.title : 'No title available';
    this.description = this.projectCard.description ? this.projectCard.description : 'No description available';
    this.coverImage = this.projectCard.profile ? this.projectCard.profile.cover.dynamic_params
      .replace('{function}', 'fit')
      .replace('{size}', '300x130')
      .replace('{optional_parameters}', 'ccccccc') : 'No image available';
    this.avatar = this.projectCard.profile ? this.projectCard.profile.avatar.url : 'No image';
    this.username = this.projectCard.profile ? this.projectCard.profile.username : 'No image';
  }
}
