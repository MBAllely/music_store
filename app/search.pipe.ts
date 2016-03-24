import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe ({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(input: Album[], args) {
    if(args[0] === 'all' || args[0] === '') {
      return input;
    } else {
      return input.filter((album) => {
        var name = album.name.toLowerCase().trim();
        var artist = album.artist.toLowerCase().trim();
        var searchString = args[0].toLowerCase().trim();
        return (name.includes(searchString) || artist.includes(searchString));
      });
    }
  }
}
