import { Component, OnInit } from '@angular/core';
import { EpisodeApiResponse } from '../api_responses/episodeapiresponse';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodesCall: EpisodeApiResponse;
  pages: number[];
  currentPage = 1;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit() { this.getEpisodes(); }

  getEpisodes(page = 1): void {
    this.episodesService.getEpisodes(page).subscribe(episodes => {
      this.episodesCall = episodes;
      this.fillInPageArray(episodes.info.pages, page);
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

    for (let counter = fromArray; counter <= toArray; counter++) {
      this.pages.push(counter);
    }
  }
}
