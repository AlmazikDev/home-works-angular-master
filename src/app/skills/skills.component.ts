import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../Interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() skills: Record<string, Rating> = {};

  counter(i: number) {
    return new Array(i);
  }

  constructor() {}

  ngOnInit(): void {}
}
