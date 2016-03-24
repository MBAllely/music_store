import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { NewAlbumComponent } from './new-album.component';
import { EditAlbumComponent } from './edit-album.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent, NewAlbumComponent, EditAlbumComponent],
  template: `
    <div class="row">
      <div class="col-sm-8">
        <div class="list-group">
          <album-display
            *ngFor="#currentAlbum of albumList"
            [album]="currentAlbum"
            class="list-group-item"
            (click)="selectAlbum(currentAlbum)"
            [class.active]="currentAlbum === selectedAlbum">
          </album-display>
        </div>
      </div>
      <div class="col-sm-4">
        <new-album (newAlbum)="addAlbum($event)"></new-album>
        <hr>
        <edit-album *ngIf="selectedAlbum" [album]="selectedAlbum"></edit-album>
      </div>
    </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public selectedAlbum: Album;
  addAlbum(details: any[]){
    this.albumList.push(new Album(details[0], details[1], details[2], details[3], details[4]))
  }
  selectAlbum(focusAlbum: Album) {
    this.selectedAlbum = focusAlbum;
  }

}
