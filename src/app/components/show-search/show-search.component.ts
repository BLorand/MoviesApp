import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl("", [Validators.minLength(2)])

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1500)).subscribe((searchValue) => {
      if (!this.search.invalid) {
        if (searchValue != null) {
          this.searchEvent.emit(searchValue);
        }
      }
    })
  }

}
