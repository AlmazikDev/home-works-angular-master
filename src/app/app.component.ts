import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photoUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg'
  biography: string = 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.'
  quotes: string[] = ['If you think your teacher is tough, wait till you get a boss.' ,'Life is not fair — get used to it!',
  'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.', 'Be nice to nerds. Chances are you’ll end up working for one.']
  links: string[] = ['https://en.wikipedia.org/wiki/Bill_Gates',
  'https://www.gatesfoundation.org/',
  'https://www.gatesnotes.com/',
  'https://twitter.com/billgates']
}
