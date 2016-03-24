import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Moustache and Turntable Wax</h1>
      </div>
      <album-list [albumList]="albums"></album-list>
    <div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor() {
    this.albums = [
      new Album("Flood", "They Might Be Giants", 12.50, "Alternative", 14),
      new Album("Blue Album", "Weezer", 13.75, "Alternative Rock", 7),
      new Album("An Awesome Wave", "alt-j", 9.99, "Alternative", 5),
      new Album("Zaba", "Glass Animals", 11.99, "Alternative", 8),
      new Album("Rivers Arms", "Balmorhea", 8.99, "Neo-classical", 3),
      new Album("American IV", "Johnny Cash", 7.99, "Country", 9)

    ];
  }

}
