import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/shows';

@Component({
  selector: 'app-feature-shows',
  templateUrl: './feature-shows.component.html',
  styleUrls: ['./feature-shows.component.scss']
})
export class FeatureShowsComponent implements OnInit {
  @Input() current: Array<Show>

  constructor() { 
    this.current = []
  }

  ngOnInit(): void {
  }

}
