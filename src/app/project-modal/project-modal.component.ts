import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { project } from '../Model/Project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  project = {} as project;

  constructor(public bsModalRef: BsModalRef){}

}
