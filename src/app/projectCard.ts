
export class ProjectCard {

  profile: any; // Potitenal refactor to account for profile type
  title: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    console.log('does this work?');
  }
}
