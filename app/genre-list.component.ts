import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'genre-list',
  inputs: ['allAlbums'],
  outputs: ['choice'],
  template: `
    <select class="form-control input-lg" (change)=selectGenre($event.target.value)>
      <option></option>
      <option *ngFor="#genre of generateGenreList(allAlbums)" value="{{genre}}">
      {{genre}}</option>
    </select>
  `
})

export class GenreListComponent{
  public genreList: string[];
  public choice: EventEmitter<string>;

  constructor(){
    this.choice = new EventEmitter();
  }

  generateGenreList(albums: Album[]) {
    this.genreList = [];
    albums.forEach((record) => {
      //console.log(record);
      if(this.genreList.indexOf(record.genre) === -1){
        this.genreList.push(record.genre);
      }
    });
    return this.genreList;
  }

  selectGenre(chosenGenre: string) {
    console.log(chosenGenre);
    this.choice.emit(chosenGenre);
  }
}
