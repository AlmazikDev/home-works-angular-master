import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../Interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
