import { Component } from '@angular/core';
import { Education, Experience, Rating } from './Interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName : string = 'Almaz'
  lastName: string = 'Kalabayev'
  position: string = 'Front-End Developer'
  desc: string = "On the way to become software developer. Passionate about IT technologies. Would love to work on streaming services such as Spotify, Yandex and Apple Music"
  photoURL: string = 'https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg'
  educations: Education[] = [
    {
      title: 'Information systems',
      city: 'Almaty',
      date: {
        start: new Date(2011, 0),
        end: new Date(2015, 1),
      },
      desc: 'Studied a lot of lessons about IT technologies',
      university: 'Suleyman Demirel university',
    },
    {
      title: 'Frontend developer',
      city: 'Nur-Sultan',
      date: {
        start: new Date(2011, 0),
        end: new Date(2015, 1),
      },
      desc: 'Studied from scratch how to create websites and applications with frameworks',
      university: 'Skillbox',
    },
  ]
  experience: Experience[] = [{
    position: 'IOS developer',
    city: 'Almaty',
    date: {
      start: new Date(2015, 1),
      end: new Date(2017, 1),
    },
    desc: 'Worked on developing mobile applications on IOS',
    company: 'Krisha.kz'
  },
  {
    position: 'IOS developer',
    city: 'Nur-Sultan',
    date: {
      start: new Date(2017, 6),
      end: new Date(2022, 1),
    },
    desc: 'Worked on backend side of applications',
    company: 'DataArt'
  }]

  skills: Record<string, Rating> = {
    'Javascript': 4,
    'CSS': 3,
    'HTML': 4,
    'Swift': 5,
    'React': 5
  }

  Interests: string[] = ['Football', 'Programming','Anime', 'UFC']
}
