import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('readOnlyTemplate', { static: true }) readOnlyTemplate!: TemplateRef<any>
  
  @ViewChild('editTemplate', { static: true }) editTemplate!: TemplateRef<any>

  title: string = "Creating template for how much time you need to read this text"

  text: string = "Every day in elementary school in America begins at 9.20 a.m. Children have classes till 3.15 p.m. At 12 o’clock children have lunch. Many boys and girls bring their lunch from home. But some of them go for lunch to a school cafeteria.Mrs. Bradley prepares school lunches almost every weekday for her two children. Sometimes she gives the children money and they eat in the school cafeteria. But usually the children prefer to take a lunch from home.This morning Mrs. Bradley is making peanut butter and cheese sandwiches, the children's favorite. She puts two bottles of apple juice for the children to drink. She is going to put the sandwiches, some cherry tomatoes and two bananas in their lunchboxes. The lunchbox is easy for the children to carry to school."
  editState: boolean = false

  constructor() {}

  time: number = 0

  ngOnInit(): void {
    
  }

  // Загружаем нужный шаблон
  loadTemplate(): TemplateRef<any> {
   
    if (this.editState) {
      return this.editTemplate
    } else {
      return this.readOnlyTemplate
    }
  }

  saveText() {
    this.editState = false
  }

  setTime(t: number) {
    Promise.resolve().then(() => this.time = t)
    
  }

  
}
