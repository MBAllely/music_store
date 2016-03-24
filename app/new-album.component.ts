import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'new-album',
  outputs: ['newAlbum'],
  template: `
    <div>
      <input placeholder="Album Title" type="text" class="form-control" #newName>
      <input placeholder="Artist" type="text" class="form-control" #newArtist>
      <input placeholder="Price" type="number" class="form-control" #newPrice>
      <input placeholder="Genre" type="text" class="form-control" #newGenre>
      <input placeholder="Current Inventory" type="number" class="form-control" #newInventory>
      <br>
      <button type="button"
        class="btn btn-lg btn-default"
        (click)="newAlbumDetails(newName, newArtist, newPrice, newGenre, newInventory)">
        Add Album</button>
    </div>
  `
})

export class NewAlbumComponent{
  public newAlbum: EventEmitter<any[]>;
  constructor(){
    this.newAlbum = new EventEmitter();
  }
  newAlbumDetails(name: HTMLInputElement, artist: HTMLInputElement, price: HTMLInputElement, genre: HTMLInputElement, inventory: HTMLInputElement) {
    this.newAlbum.emit([name.value, artist.value, parseFloat(price.value), genre.value, parseInt(inventory.value)]);
    name.value = '';
    artist.value = '';
    price.value = '';
    genre.value = '';
    inventory.value = '';
  }
}
