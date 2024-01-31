import {IPortfolioProject} from './portfolio-project.model';

export interface IProjectsYear {
  year: string;
  projects: IPortfolioProject[];
}

export class ProjectsYear implements IProjectsYear {
  constructor(
    public year: string,
    public projects: IPortfolioProject[]) {
  }
}
