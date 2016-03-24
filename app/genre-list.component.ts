import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'genre-list',
  inputs: ['allAlbums'],
  template: `
    <select class="form-control">
      <option *ngFor="#genre of generateGenreList(allAlbums)">
      {{genre}}</option>
    </select>
  `
})

export class GenreListComponent{
  public genreList: string[];

  generateGenreList(albums: Album[]) {
    this.genreList = [];
    //console.log(albums);
    albums.forEach((record) => {
      //var i = this.genreList.length;
      console.log(record);
      if(this.genreList.indexOf(record.genre) === -1){
        this.genreList.push(record.genre);
      }
    });
    return this.genreList;
  }
}
