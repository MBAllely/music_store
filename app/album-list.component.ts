import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { NewAlbumComponent } from './new-album.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
    <div class="row">
      <div class="col-sm-8">
        <div class="list-group">
          <album-display
            *ngFor="#currentAlbum of albumList"
            [album]="currentAlbum"
            class="list-group-item">
          </album-display>
        </div>
      </div>
      <div class="col-sm-4">
        <h3>Add album</h3>
        <new-album (newAlbum)="addAlbum($event)"></new-album>
      </div>
    </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  addAlbum(details: any[]){
    this.albumList.push(new Album(details[0], details[1], details[2], details[3], details[4]))
  }

}
