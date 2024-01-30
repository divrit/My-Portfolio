import { Component, OnInit } from '@angular/core';
import { project } from '../Model/Project';
import { Tag } from '../Model/tag';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{


 projects = {} as project[];

 constructor(private projectService : ProjectsService){
  
 }


  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

}