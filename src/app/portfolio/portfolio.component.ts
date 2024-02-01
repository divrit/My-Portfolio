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


 
  filtering : boolean = false;
  isCollapsed: boolean =  true;
  typescript = false;

  angular : boolean = false;
  python : boolean = false;
  springboot : boolean = false;

  java : boolean = false;
  nodejs : boolean = false;
  html : boolean = false;
  css : boolean = false;
  aws : boolean = false;



 projects = {} as project[];
 resetFilters() {
  this.typescript = false;

  this.angular = false;
  this.python = false;
  this.springboot = false;

  this.java = false;
  this.nodejs = false;
  this.html = false;
  this.css = false;
  this.aws = false;
  this.projects = this.projectService.GetProjects();
  this.filtering = false;
}

 constructor(private projectService : ProjectsService){
  
 }


  ngOnInit(): void {

    this.projects = this.projectService.GetProjects();
    
  }

  filter(){
    let filterTags: Tag[] = [];
    this.filtering = false;
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
      this.filtering = true;
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
      this.filtering = true;
    }
    if(this.html){
      filterTags.push(Tag.HTML);
      this.filtering = true;
    }
    if(this.css){
      filterTags.push(Tag.CSS);
      this.filtering = true;
    }
    if(this.aws){
      filterTags.push(Tag.AWS);
      this.filtering = true;
    }
    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
      this.filtering = true;
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
      this.filtering = true;
    }

    this.projects =this.projectService.GetProjectsByFilter(filterTags);
  }


}