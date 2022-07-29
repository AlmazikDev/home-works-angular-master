import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../Interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() educations: Education[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
