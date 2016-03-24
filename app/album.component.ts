import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <h4 class="list-group-item-heading">{{ album.name }} - {{ album.artist }}</h4>
    <p class="list-group-item-text">Price: \${{ album.price.toFixed(2) }}</p>
    <p class="list-group-item-text">Genre: {{ album.genre }}</p>
    <p class="list-group-item-text">Inventory: {{ album.inventory }}</p>
  `
})

export class AlbumComponent {

}
