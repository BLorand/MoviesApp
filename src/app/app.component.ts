import { Component } from '@angular/core';
import { Show } from './models/shows';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesApp';

  currentSearch: Array<Show> = []
  todaysShows: Array<Show> = []
  displayTodayShows = true;
  currentSearchValue = "";
    
    constructor(private showsService: ShowsService) {
      this.getTodaysShows()
    }
    
    doSearch(searchValue:string) {
      const userInput = searchValue.split(',').map(i => i.trim() );
      this.currentSearchValue = userInput[0];
      
      this.showsService.searchShows(userInput[0]).subscribe(data => this.currentSearch = data)
      this.displayTodayShows = false;
    }
    
    getTodaysShows() {
      this.showsService.getTrendingShows().subscribe(data => this.todaysShows = data)
    }
}
