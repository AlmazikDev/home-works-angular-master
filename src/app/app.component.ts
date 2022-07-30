import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search, getSearchFilms } from './films';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}

  searchResult?: Observable<Array<getSearchFilms>> | any;

  mapFilmInfo = new Map();

  openModal: boolean = false;
  idFilm: string = '';

  ngOnInit(): void {
     this.searchResult =  [
      {
        Title: 'Легенда номер 17',
        Year: '2012',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
          'https://upload.wikimedia.org/wikipedia/ru/a/a0/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0_%E2%84%9617%C2%BB.jpg',
      },
      {
        Title: 'Движение вверх',
        Year: '2017',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage33/contents/9/5/b3cd98965f7974d0100f9ff47df0a7.jpg',
      },
      {
        Title: 'Гонка',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage8/contents/3/b/3b252038625c5ff5fc8024f4b59ca7.jpg',
      },
      {
        Title: 'Ford против Ferrari',
        Year: '2021',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage32/contents/1/6/1302bf74e7aad7aa1458bd81767978.jpg',
      },
      {
        Title: 'Лед',
        Year: '2021',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage31/contents/c/0/3f116b98d3c2965845405ba0f8ab8f.jpg',
      },
      {
        Title: 'Тренер',
        Year: '2019',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage26/contents/2/a/15157b448ab23a8503c57d991d294c.jpg',
      },
      {
        Title: 'Гол',
        Year: '2005',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b680e256-fb50-4cec-9660-2259bbf737e0/600x900',
      },
      {
        Title: 'Каратэ пацан',
        Year: '2021',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage4/contents/4/0/376b534851e413a9f9fd7a8ce7bb44.jpg',
      },
      {
        Title: 'Лев Яшин',
        Year: '2021',
        imdbID: 'tt0113690',
        Type: 'movie',
        Poster:
          'https://thumbs.dfs.ivi.ru/storage28/contents/8/5/a71581672db038a85dcdb605d16528.jpg',
      },
      {
        Title: 'Человек который изменил все',
        Year: '2004',
        imdbID: 'tt0386792',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0a8dd3ce-d0ce-493d-9590-37977ae5b833/600x900',
      },
    ];
  }
  getFilms(obj: Search) {
    this.httpService.getFilms(obj.title, obj.year).subscribe((data: any) => {
      this.searchResult = data.Search;
    });
  }

  getInfoFilm(id: string) {
    this.idFilm = id;
    if (!this.mapFilmInfo.has(id)) {
      this.httpService.getShortInfo(id).subscribe((data: any) => {
        this.mapFilmInfo.set(id, data);
        this.openModal = true;
      });
    } else {
      this.openModal = true;
    }
  }
}
