import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { project } from '../Model/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    featuredProject = {} as project;
    constructor(private projectService : ProjectsService){

    }

  ngOnInit(): void {
    this.featuredProject  = this.projectService.GetProjectsById(0);

  }

}
