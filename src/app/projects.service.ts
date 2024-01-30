import { Injectable } from '@angular/core';
import { Tag } from './Model/tag';
import { project } from './Model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {



  projects : project[] = [
    {
        id: 0,
        name: "First App",
        summary: "This is the summary for First App",
        description: "First App is an innovative web application built using Angular, AWS, and Java. It features an intuitive UI and robust cloud-based storage.",
        projectLink: "https://www.firstappexample.com",
        tags: [Tag.ANGULAR, Tag.AWS, Tag.JAVA],
        pictures: [
            "../../../assets/neuorn2.jpg",
            "../../../assets/neuron.jpg"
        ]
    },
    {
        id: 2,
        name: "Second Project",
        summary: "Summary of the Second Project",
        description: "Second Project is a mobile app developed using React Native, integrating with Firebase. It focuses on providing a user-friendly interface for social media interactions.",
        projectLink: "https://www.secondprojectexample.com",
        tags: [Tag.AWS, Tag.JAVA],
        pictures: [
          "../../../assets/neuorn2.jpg",
          "../../../assets/neuron.jpg"
        ]
    },
    {
        id: 3,
        name: "Third Tool",
        summary: "A brief overview of Third Tool",
        description: "Third Tool is a desktop application designed for efficient data analysis. It uses Python and integrates with various APIs to fetch and process large datasets.",
        projectLink: "https://www.thirdtoolexample.com",
        tags: [Tag.JAVA, Tag.AWS],
        pictures: [
          "../../../assets/neuorn2.jpg",
          "../../../assets/neuron.jpg"
        ]
    },
    {
        id: 4,
        name: "Fourth Framework",
        summary: "Introduction to Fourth Framework",
        description: "Fourth Framework is a library for efficient computation, developed in C++. It's designed for high-performance computing tasks.",
        projectLink: "https://www.fourthframeworkexample.com",
        tags: [Tag.TYPESCRIPT],
        pictures: [
          "../../../assets/neuorn2.jpg",
          "../../../assets/neuron.jpg"
        ]
    },
    {
        id: 5,
        name: "Fifth System",
        summary: "Overview of Fifth System",
        description: "Fifth System is an IoT platform that leverages Python and Node.js for smart home solutions. It integrates various sensors and smart devices.",
        projectLink: "https://www.fifthsystemexample.com",
        tags: [Tag.JAVA, Tag.AWS],
        pictures: [
          "../../../assets/neuorn2.jpg",
          "../../../assets/neuron.jpg"
        ]
    },
    {
        id: 6,
        name: "Sixth Solution",
        summary: "Details about Sixth Solution",
        description: "Sixth Solution is a cloud-based SaaS offering, using Django and React. It aims to simplify business workflows and customer management.",
        projectLink: "https://www.sixthsolutionexample.com",
        tags: [Tag.HTML, Tag.CSS],
        pictures: [
          "../../../assets/neuorn2.jpg",
          "../../../assets/neuron.jpg"
        ]
    }
]


  constructor() { }


  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id: number) : project {

    let project = this.projects.find(projec => projec.id === id)

    if(project === undefined){
      throw new TypeError('There is no project mathcing the id'+ id);
    }

    return project;
  }


  GetProjectsByFilter(filterTags: Tag[]): project[] {
    let filteredProjects: project[] = [];


    this.projects.forEach( function (projects){
      let foundAll = true;

      filterTags.forEach(function(filterTags){
        if(projects.tags.includes(filterTags) == false)
        foundAll = false;
      });

      if(foundAll){
        filteredProjects.push(projects);
      }


    });
    return filteredProjects;
  }

}
