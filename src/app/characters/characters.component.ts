import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterApiResponse } from '../api_responses/characterapiresponse';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characterCall: CharacterApiResponse;
  pages: number[];
  currentPage = 1;
  searchTerm = '';

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.fromPage) {
          this.currentPage = Number(params.fromPage);
          if (Number.isNaN(this.currentPage)) { this.currentPage = 1; }
        }
        if (params.nameSearch) { this.searchTerm = params.nameSearch; }

        this.getCharacters(this.currentPage);
      });
  }

  getCharacters(page = 1): void {
    this.charactersService.getCharacters(page, this.searchTerm).subscribe(characters => {
      this.characterCall = characters;
      this.fillInPageArray(characters.info.pages, page);
      this.currentPage = page;
    });
  }

  fillInPageArray(total: number, current: number): void {
    this.pages = [] as number[];

    // display up to 6 pagination links at a time
    
    let fromArray: number;
    if(current == 1 || current == 2) {
      fromArray = 1;
    } else if (total <= 5) {
      fromArray = 1;
    } else if (total - current <= 2) {
      fromArray = total - 5;
    } else {
      fromArray = current - 2;
    }

    let toArray: number;
    if (total <= 6) {
      toArray = total;
    } else if (current == 1 || current == 2) {
      toArray = 6;
    } else if(total - current <= 3) {
      toArray = total;
    } else {
      toArray = current + 3;
    }

    console.log("t: " + total + " c: " + current + " fa: " + fromArray + " ta: " + toArray);

    for (let counter = fromArray; counter <= toArray; counter++) {
      this.pages.push(counter);
    }
  }
}
