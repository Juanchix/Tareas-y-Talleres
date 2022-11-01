import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Series> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  getAvgSeasons(): number {
    let total: number = 0;
    this.series.forEach((serie) => {
        total = total + serie.seasons;
    });
    let avg : number = total/this.series.length;
    return avg;
  }
}
