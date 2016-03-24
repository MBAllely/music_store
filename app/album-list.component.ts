import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent],
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
      </div>
    </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];

}
