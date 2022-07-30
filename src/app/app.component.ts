import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  
  @ViewChild('emailInput') emailInputElement!: ElementRef<HTMLInputElement>;

  title: string = "Creating directive for searching text you typed"

  searchText: string = ''


  constructor() {}



  ngOnInit(): void {
    
  }

 



 
  ngAfterViewInit(): void {
    this.emailInputElement.nativeElement.focus();
  }





  
}
