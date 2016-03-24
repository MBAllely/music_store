import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'edit-album',
  inputs: ['album'],
  template: `
    <div>
      <input class="form-control" [(ngModel)]="album.name" type="text">
      <input class="form-control" [(ngModel)]="album.artist" type="text">
      <input class="form-control" [(ngModel)]="album.genre" type="text">
      <div class="input-group">
        <span class="input-group-addon">$</span>
        <input class="form-control" [(ngModel)]="album.price" type="number">
      </div>
      <div class="input-group">
        <span class="input-group-addon">Onhand</span>
        <input class="form-control" [(ngModel)]="album.inventory" type="number">
      </div>

    </div>
  `
})

export class EditAlbumComponent{

}
